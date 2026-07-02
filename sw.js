// 自己消滅 Service Worker。
// 過去に配布した SW が「古いコードを居座らせる」不具合の原因だったため、
// このファイルは「全キャッシュ削除 → 自分自身を登録解除 → ページ再読込」だけを行う。
// （app.js 側でも起動時に unregister するが、旧SWを持つ端末への保険として残す）
self.addEventListener("install", () => {
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((key) => caches.delete(key)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: "window" });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
