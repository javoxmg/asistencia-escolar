const CACHE_NAME = 'asistencia-v20';
const FILES_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './logo-ies.png'
];

// Al instalar, se descargan los archivos saltándose la caché HTTP del navegador
// (GitHub Pages la mantiene ~10 min), para no guardar nunca una versión vieja.
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => Promise.all(
        FILES_TO_CACHE.map(url => cache.add(new Request(url, { cache: 'reload' })))
      ))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// Primero la red (así siempre se ve la última versión publicada) y, si no hay
// conexión o tarda más de 4 s, la copia guardada (la app sigue funcionando offline).
self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') {
    return;
  }
  if (new URL(event.request.url).origin !== self.location.origin) {
    return;
  }

  event.respondWith((async () => {
    const cache = await caches.open(CACHE_NAME);
    const network = fetch(event.request, { cache: 'no-cache' }).then(response => {
      if (response && response.status === 200) {
        cache.put(event.request, response.clone());
      }
      return response;
    });
    const timeout = new Promise(resolve => setTimeout(() => resolve(null), 4000));

    try {
      const response = await Promise.race([network, timeout]);
      if (response) {
        return response;
      }
    } catch (e) {
      // sin conexión: se usa la copia guardada
    }

    const cached = await cache.match(event.request, { ignoreSearch: true });
    if (cached) {
      return cached;
    }
    try {
      return await network;
    } catch (e) {
      return (await cache.match('./index.html')) || Response.error();
    }
  })());
});
