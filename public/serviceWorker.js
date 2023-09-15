// Cache name
const CACHE_NAME = "cache-v1";
// Cache targets
const urlsToCache = ["./", "./home.html"];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response ? response : fetch(event.request);
    })
  );
});
