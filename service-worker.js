/**
 * VELOX RACING — CACHE PURGE & SERVICE WORKER DECOMMISSION
 * Immediately unregisters service workers and wipes all CacheStorage.
 * Ensures the browser ALWAYS updates live data from the server.
 */

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.map((k) => caches.delete(k))))
      .then(() => self.registration.unregister())
      .then(() => self.clients.claim())
  );
});

// Pass-through without caching anything
self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request, { cache: 'no-store' }));
});
