self.addEventListener('install', function(event) {
  console.log('used to register service worker');
});

self.addEventListener('fetch', function(event) {
  console.log('used to intercept requests so we can check for the file or data in the cache');
});

self.addEventListener('activate', function(event) {
  console.log('this event triggers when the service worker activates');
});

const CACHE_NAME = 'sw-cache-example';
const toCache = [
  '/',
  '/index.html'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll(toCache)
    })
    .then(self.skipWaiting())
  )
});