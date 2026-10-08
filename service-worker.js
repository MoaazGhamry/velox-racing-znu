/**
 * VELOX RACING PWA SERVICE WORKER
 * Network-First Strategy + Total Cache Buster
 */

const CACHE_NAME = 'velox-clean-v2.2';
const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/team.html',
  '/join.html',
  '/hr.html',
  '/style.css?v=2.2',
  '/team.js',
  '/config.js',
  '/manifest.json',
  '/VeloxLogoWeb.png',
  '/VeloxForWeb_dark.png',
  '/velox_car_render.jpg'
];

// Install: pre-cache assets & force instant activation
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

// Activate: PURGE ALL OLD CACHES (Deletes old themes and legacy assets)
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

// Fetch: Network-First strategy
// Users always get fresh live changes, with smooth offline support
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET' || !event.request.url.startsWith('http')) {
    return;
  }

  // Large video streaming handled directly by browser
  if (event.request.url.includes('.mp4')) {
    return;
  }

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
