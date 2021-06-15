const FILES_TO_CACHE = [
    '/index.html',
    'favicon.ico',
    '/manifest.webmanifest',
    'index.js',
    '/style.css',
    '/db.js',
];
const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";

self.addEventListener("install", function (evt) {
    evt.waitUntil(
        caches.open(CACHE_NAME).then(cache =>{
            console.log("Files cached");
            return cache.addAll(FILES_TO_CACHE);
        })
    );
    self.skipWaiting();
})