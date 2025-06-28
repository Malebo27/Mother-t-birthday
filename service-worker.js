const cacheName = "birthday-cache-v1";
const assets = [
  "./",
  "./index.html",
  "./styles.css",
  "./script.js",
  "./images/cake.jpg",
  // Add all your image and audio paths
  "./music/happy-birthday.mp3"
];

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(cacheName).then((cache) => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches.match(e.request).then((response) => {
      return response || fetch(e.request);
    })
  );
});
