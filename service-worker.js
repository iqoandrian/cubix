const CACHE_NAME = "kubus3d-cache-v1";

const ASSETS = [
  "./index.html",
  "./manifest.json",
  "./js/gameCore.js",
  "./js/gameObjects.js",
  "./js/gameLogic.js",
  "./js/controls.js",
  "./js/audio.js",
  "./assets/icon-192.png",
  "./assets/icon-512.png"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

// Activate
self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key)))
    )
  );
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(res => res || fetch(event.request))
  );
});
