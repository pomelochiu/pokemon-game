/* V17.1 app-shell cache. Never intercept external speech service traffic. */
const VERSION='v17.1.0';
const SCOPE=new URL(self.registration.scope);
const PREFIX=`pokemon-app:${SCOPE.pathname}:`;
const CACHE=PREFIX+VERSION;
const REQUIRED=['index.html','dataset.js'];
const OPTIONAL=['manifest.json','icon-180.png','icon-192.png','icon-512.png','libs/pinyin-pro.js'];
const urlFor=path=>new URL(path,SCOPE).href;
self.addEventListener('install',event=>event.waitUntil((async()=>{
  const cache=await caches.open(CACHE);
  for(const path of REQUIRED){const res=await fetch(urlFor(path),{cache:'reload'});if(!res.ok)throw new Error('Missing app file: '+path);await cache.put(urlFor(path),res);}
  await Promise.allSettled(OPTIONAL.map(async path=>{const res=await fetch(urlFor(path),{cache:'reload'});if(res.ok)await cache.put(urlFor(path),res);}));
  await self.skipWaiting();
})()));
self.addEventListener('activate',event=>event.waitUntil((async()=>{
  for(const key of await caches.keys())if(key.startsWith(PREFIX)&&key!==CACHE)await caches.delete(key);
  await self.clients.claim();
})()));
self.addEventListener('fetch',event=>{
  const req=event.request,url=new URL(req.url);
  if(req.method!=='GET'||url.origin!==SCOPE.origin||!url.pathname.startsWith(SCOPE.pathname))return;
  const path=url.pathname.slice(SCOPE.pathname.length);
  const page=req.mode==='navigate'&&(path===''||path==='index.html');
  if(!page&&!REQUIRED.includes(path)&&!OPTIONAL.includes(path))return;
  event.respondWith((async()=>{
    const cache=await caches.open(CACHE),key=urlFor(page?'index.html':path);
    try{const res=await fetch(req,{cache:'no-cache'});if(res.ok){await cache.put(key,res.clone());return res;}return await cache.match(key)||res;}
    catch(e){return await cache.match(key)||Response.error();}
  })());
});
