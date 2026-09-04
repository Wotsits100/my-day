const CACHE='myday-v2-1';
const ASSETS=['./','./index.html','./manifest.webmanifest','./icon-192.png','./icon-512.png'];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>e.waitUntil((async()=>{for(const key of await caches.keys())if(key!==CACHE)await caches.delete(key);await self.clients.claim()})()));
self.addEventListener('fetch',e=>{
 if(e.request.method!=='GET')return;
 e.respondWith((async()=>{
  try{const fresh=await fetch(e.request);const cache=await caches.open(CACHE);cache.put(e.request,fresh.clone());return fresh}
  catch(err){const cached=await caches.match(e.request);if(cached)return cached;throw err}
 })());
});
