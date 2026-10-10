/* XC OP Report Generator — reliable offline app shell */
const CACHE_NAME = "xc-op-report-generator-v3-mobile";
const APP_SHELL = ["./", "./index.html", "./manifest.json", "./icon.svg", "./icon-op-report-generator.png", "./assets/icon-192.png", "./assets/icon-512.png"];
self.addEventListener("install", event => {
  event.waitUntil((async () => {
    const cache = await caches.open(CACHE_NAME);
    const urls = APP_SHELL.map(path => new URL(path, self.registration.scope).href);
    for (const url of urls) {
      const response = await fetch(new Request(url, { cache: "reload" }));
      if (!response.ok) throw new Error(`Offline setup failed to cache ${url}: ${response.status}`);
      await cache.put(url, response);
    }
    await self.skipWaiting();
  })());
});
self.addEventListener("activate", event => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(key => key.startsWith("xc-op-report-generator-") && key !== CACHE_NAME).map(key => caches.delete(key)));
    await self.clients.claim();
  })());
});
self.addEventListener("fetch", event => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;
  if (request.mode === "navigate") {
    event.respondWith((async () => {
      const cache = await caches.open(CACHE_NAME);
      try {
        const response = await fetch(request);
        if (response && response.ok) await cache.put(new URL("./index.html", self.registration.scope).href, response.clone());
        return response;
      } catch (_) {
        return (await cache.match(request)) || (await cache.match(new URL("./index.html", self.registration.scope).href)) || (await cache.match(new URL("./", self.registration.scope).href));
      }
    })());
    return;
  }
  event.respondWith((async () => {
    const cached = await caches.match(request);
    if (cached) return cached;
    try {
      const response = await fetch(request);
      if (response && response.ok) await (await caches.open(CACHE_NAME)).put(request, response.clone());
      return response;
    } catch (_) {
      return new Response("Offline and this resource is not cached yet.", { status: 503, headers: { "Content-Type": "text/plain; charset=utf-8" } });
    }
  })());
});
