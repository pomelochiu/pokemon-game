const CACHE_NAME = 'pokemon-reading-app-v1';
const CORE_ASSETS = [
    './',
    './index.html',
    './dataset.js',
    './manifest.json'
];

self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(CORE_ASSETS).catch((err) => {
                console.warn('[SW] 部分核心檔案預快取失敗:', err);
            });
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', (event) => {
    event.waitUntil(
        caches.keys().then((keys) => {
            return Promise.all(
                keys
                    .filter((key) => key !== CACHE_NAME)
                    .map((key) => caches.delete(key))
            );
        })
    );
    self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    const req = event.request;
    if (req.method !== 'GET') return;

    const url = new URL(req.url);

    // 1. 寶可夢圖片與本地靜態資源：優先讀快取，沒有再抓網路並存入快取
    if (req.destination === 'image' || url.origin === location.origin) {
        event.respondWith(
            caches.match(req).then((cached) => {
                if (cached) return cached;
                return fetch(req).then((networkRes) => {
                    if (networkRes && networkRes.status === 200) {
                        const resClone = networkRes.clone();
                        caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
                    }
                    return networkRes;
                });
            })
        );
        return;
    }

    // 2. 外部 CDN (如 pinyin-pro)：網路優先，斷網時回退到快取
    event.respondWith(
        fetch(req)
            .then((networkRes) => {
                if (networkRes && networkRes.status === 200) {
                    const resClone = networkRes.clone();
                    caches.open(CACHE_NAME).then((cache) => cache.put(req, resClone));
                }
                return networkRes;
            })
            .catch(() => caches.match(req))
    );
});