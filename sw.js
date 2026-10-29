/* Tassie Camp Kitchen offline cache.
   When you change any file, bump VERSION so both phones pick up the update next time they open the site with signal. */
const VERSION = "tck-v6";
const FILES = [
  "./",
  "index.html",
  "recipes.js",
  "manifest.webmanifest",
  "bricolage.woff2",
  "icon-192.png",
  "icon-512.png",
  "apple-touch-icon.png"
];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(VERSION).then(c => c.addAll(FILES)).then(() => self.skipWaiting()));
});

self.addEventListener("activate", e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(k => k !== VERSION).map(k => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

/* Pages and recipe data: try the network for 3 seconds (fresh when you have signal), otherwise use the saved copy.
   Fonts and icons: saved copy first. */
self.addEventListener("fetch", e => {
  const req = e.request;
  if (req.method !== "GET" || new URL(req.url).origin !== location.origin) return;
  const isFresh = req.mode === "navigate" || /\.(html|js|webmanifest)$/.test(new URL(req.url).pathname);

  if (isFresh) {
    e.respondWith((async () => {
      const cache = await caches.open(VERSION);
      try {
        const res = await Promise.race([
          fetch(req),
          new Promise((_, rej) => setTimeout(() => rej(new Error("slow")), 3000))
        ]);
        if (res && res.ok) cache.put(req, res.clone());
        return res;
      } catch (err) {
        return (await cache.match(req, { ignoreSearch: true })) ||
               (req.mode === "navigate" ? await cache.match("index.html") : Response.error());
      }
    })());
    return;
  }

  e.respondWith(caches.match(req).then(hit => hit || fetch(req).then(res => {
    if (res.ok) caches.open(VERSION).then(c => c.put(req, res.clone()));
    return res;
  })));
});
