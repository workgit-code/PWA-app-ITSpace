const CACHE_NAME = "version-1"
// the doc that is being created right after the service worker & representtha page that is shown when there is no int connection
const urlsToCache = ['index.html', 'offline.html']

const self = this

// install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache')

                return cache.addAll(urlsToCache);
            })
    )
});

// Listen for requests
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
            .then(() => {
                return fetch(event.request) 
                    .catch(() => caches.match('offline.html'))
            })
    )
});

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhiteList = [];
    cacheWhiteList.push(CACHE_NAME)
    
    event.waitUntil(
        caches.keys()
            .then((cacheNames) => Promise.all(
                cacheNames.map((cacheName) => {
                    // so that whenever we update something its gonna keep only version-1 and delete the previous versions
                    // only keeping the scecific cache name we need
                    if (!cacheWhiteList.includes(cacheName)) {
                        return caches.delete(caheName);
                    }
                })
            ))
    )
});
