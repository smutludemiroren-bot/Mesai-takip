self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('mesai-cache-v1').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        // Gerekli diğer dosyaları burada listeleyin (örn: CSS, JS, ikonlar)
      ]);
    })
  );
  self.skipWaiting();
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
