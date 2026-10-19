/**
 * VELOX RACING PWA SERVICE WORKER
 * Network-First Strategy + Live Connection Bypass
 */

const CACHE_NAME = 'velox-live-v6.0';
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/join.html',
  '/hr.html',
  '/portal.html',
  '/sponsorship.html',
  '/style.css?v=6.0',
  '/i18n.js?v=6.0',
  '/config.js',
  '/manifest.json',
  '/pwa-icon-192.png',
  '/pwa-icon-512.png',
  '/pwa-icon-maskable.png',
  '/apple-touch-icon.png',
  '/VeloxLogoWeb.png',
  '/VeloxForWeb_dark.png',
  '/znu_logo_light.png',
  '/znu text logo dark.png',
  '/logo_eng.png',
  '/velox_car_render.jpg',
  '/photos/Karim Shaprawy.jpeg',
  '/photos/Moaaz Elghamry.jpeg',
  '/photos/Mohamed Romy.jpeg'
];

// Install: pre-cache static assets & force instant activation
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('Pre-cache item warning:', err);
      });
    })
  );
});

// Activate: PURGE ALL OLD CACHES immediately
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('Purging legacy cache:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Fetch: NEVER cache team structure, stylesheets, or live database connections
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  // Large video streaming handled directly by browser
  if (event.request.url.includes('.mp4')) {
    return;
  }

  // ALWAYS BYPASS CACHE for team structure, styles, team scripts, and database APIs
  // Ensures team structure and styling are ALWAYS 100% fresh from live connection
  const url = event.request.url;
  if (
    url.includes('style.css') ||
    url.includes('i18n.js') ||
    url.includes('team.js') ||
    url.includes('team.html') ||
    url.includes('supabase.co') ||
    url.includes('/team')
  ) {
    event.respondWith(
      fetch(event.request, { cache: 'no-store' }).catch(() => {
        return caches.match(event.request);
      })
    );
    return;
  }

  // Standard Network-First strategy for remaining static pages
  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      })
      .catch(() => {
        return caches.match(event.request).then((cachedResponse) => {
          if (cachedResponse) return cachedResponse;
          if (event.request.headers.get('accept')?.includes('text/html')) {
            return caches.match('/index.html');
          }
        });
      })
  );
});
