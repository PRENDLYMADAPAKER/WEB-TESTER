const CACHE_NAME = 'nzm-iptv-shell-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/channels.js',
  '/logo.png',
  '/mwlogo.png'
];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS_TO_CACHE)));
  self.skipWaiting();
});

self.addEventListener('activate', (e) => {
  e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
  // network-first for streams & dynamic; cache-first for shell
  const url = new URL(e.request.url);
  if (url.pathname.endsWith('.m3u8') || url.pathname.endsWith('.mpd') || url.hostname.includes('youtube.com')) {
    return; // don't cache stream segments
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request).then(res => {
      return caches.open(CACHE_NAME).then(cache => { cache.put(e.request, res.clone()); return res; });
    }).catch(()=>caches.match('/index.html')))
  );
});
