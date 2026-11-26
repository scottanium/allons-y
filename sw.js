/* Optional leftover-SW cleanup for the old /allons-y/ path after the repo rename.
 * Replaces the old Allons-y service worker, deletes allonsy-* caches, unregisters
 * itself, and sends open clients to /language-app/. GitHub Pages does not redirect
 * after a rename, so this file only helps people who still have the old worker.
 */
self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil((async function () {
    var keys = await caches.keys();
    await Promise.all(keys.filter(function (k) {
      return k.indexOf("allonsy-") === 0;
    }).map(function (k) {
      return caches.delete(k);
    }));
    await self.clients.claim();
    var clientsArr = await self.clients.matchAll({ type: "window", includeUncontrolled: true });
    await Promise.all(clientsArr.map(function (c) {
      return c.navigate("https://scottanium.github.io/language-app/");
    }));
    await self.registration.unregister();
  })());
});

self.addEventListener("fetch", function (event) {
  if (event.request.mode === "navigate") {
    event.respondWith(Response.redirect("https://scottanium.github.io/language-app/", 302));
  }
});
