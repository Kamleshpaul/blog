if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/service-worker.js')
    .then(function (registration) {
      console.log('Registration successful, scope is:', registration.scope);
    })
    .catch(function (error) {
      console.log('Service worker registration failed, error:', error);
    });
}

var CACHE_NAME = 'PWA_BLOG_V1';

var urlsToCache = [
  './',
  'css/app.css',
  'css/custom.css',
  'js/app.js',
  'js/jquery.min.js',
  'js/jquery.stellar.min.js',
  'img/logo-alt.png',
  'img/logo.png',
];

self.addEventListener('install', function (event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function (cache) {
        console.log('Opened cache');
        var x = cache.addAll(urlsToCache);
        console.log('cache added');
        return x;
      })
  );
});

self.addEventListener('fetch', function (event) {
  event.respondWith(
    caches.match(event.request)
      .then(function (response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
      )
  );
});