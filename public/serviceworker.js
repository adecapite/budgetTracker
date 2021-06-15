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
});

self.addEventListener("activate", function (evt) {
    evt.waitUntil(
        caches.keys().then(keylist => {
            return Promise.all(
                keylist.map(key => {
                    if (key !== CACHE_NAME && key!== DATA_CACHE_NAME) {
                        console.log("Clearing cache data", key);
                        return caches.delete(key);
                    }
                })
            );
        })
    );
    self.clients.claim();
});

//fetch 