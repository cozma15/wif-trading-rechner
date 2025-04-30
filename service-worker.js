self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open('wif-cache').then((cache) => {
      return cache.addAll([
        'wif-rechner.html',
        'manifest.json',
        'icon-dollar-192.png',
        'splash-icon-512.png'
      ]);
    })
  );
});
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});