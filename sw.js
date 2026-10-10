const CACHE="xc-op-report-generator-v2";
const ASSETS=[
 "./",
 "./index.html",
 "./manifest.json",
 "./assets/icon-192.png",
 "./assets/icon-512.png",
 "./icon-op-report-generator.png"
];
self.addEventListener("install",event=>{
 event.waitUntil(caches.open(CACHE).then(cache=>cache.addAll(ASSETS)));
 self.skipWaiting();
});
self.addEventListener("activate",event=>{
 event.waitUntil((async()=>{
  const keys=await caches.keys();
  await Promise.all(keys.filter(key=>key!==CACHE).map(key=>caches.delete(key)));
  await self.clients.claim();
 })());
});
self.addEventListener("fetch",event=>{
 if(event.request.method!=="GET")return;
 event.respondWith(caches.match(event.request).then(cached=>{
  if(cached)return cached;
  return fetch(event.request).catch(()=>caches.match("./index.html"));
 }));
});
