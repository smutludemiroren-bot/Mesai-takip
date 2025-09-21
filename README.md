<html><head><title>Mesai Takip</title><link rel="manifest" href="manifest.json">
<script>
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('service-worker.js').then(function(registration) {
    console.log('ServiceWorker registered with scope:', registration.scope);
  }).catch(function(error) {
    console.log('ServiceWorker registration failed:', error);
  });
}
</script>
</head>
<body><h1>Mesai Takip</h1><p>HTML not found.</p></body></html>
{
  "name": "Mesai Takip - S\u00fcha",
  "short_name": "MesaiTakip",
  "start_url": "./index.html",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#0d47a1",
  "icons": [
    {
      "src": "icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
const CACHE_NAME = 'mesai-takip-cache-v1';
const urlsToCache = ['./index.html','./manifest.json'];

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache)));
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(response => response || fetch(event.request)));
});
