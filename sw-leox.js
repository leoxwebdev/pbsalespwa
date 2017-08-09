var dataCacheName = 'salesData-v1.1.8';
var cacheName = 'salesPWA-step-6-2.8';
// var filesToCache = [];

var filesToCache = [
  '/',
  '/index.html',
  './app-leox.js',
  './jqm145.css',
  './jq211.js',
  './jqm145.js',
  './jqm145.js',
  './slider.css',
  './pwa-leox.css',
  './ap-fullscreen-modal.min.css',
  './imgUrl.js',
  './images.js',
  './jqCycle2.js',
  './c2center.min.js',
  './ap-fullscreen-modal.min.js',
  './pbaylogo.png',
  './pbayImages/favicon.ico'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      console.log("keyList = ", keyList);
      return Promise.all(keyList.map(function(key) {
        // if (key !== cacheName) {
        if (key !== cacheName && key !== dataCacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  // console.log('[Service Worker] Fetch', e.request.url);
  // var dataUrl = 'https://query.yahooapis.com/v1/public/yql';
  var dataUrl = 'http://127.0.0.1/';
  // console.log("caches = ", caches);
  // console.log("found = ", e.request.url.indexOf(dataUrl) );
  if (e.request.url.indexOf(dataUrl) > -1) {
     // console.log("(e.request.url.indexOf(dataUrl) == 0)");
     // * When the request URL contains dataUrl, the app is asking for fresh
     // * weather data. In this case, the service worker always goes to the
     // * network and then caches the response. This is called the "Cache then
     // * network" strategy:
     // * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
     
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response){
          cache.put(e.request.url, response.clone());
          console.log("cache = ", cache);
          return response;
        });
      })
    );
  } else {
    console.log("else");
    /*
     * The app is asking for app shell files. In this scenario the app uses the
     * "Cache, falling back to the network" offline strategy:
     * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
     */
    
    // console.log("e.request.url = ", e.request.url );
    e.respondWith(
      caches.match(e.request).then(
        function(response) {
        return response || fetch(e.request);
        }
      )
    );
  }
});