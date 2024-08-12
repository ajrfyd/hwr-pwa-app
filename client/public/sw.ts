/// <reference lib="webworker" />

import { precacheAndRoute } from 'workbox-precaching';

declare let self: ServiceWorkerGlobalScope & typeof globalThis;

console.log(precacheAndRoute);

self.addEventListener('push', (event: PushEvent) => {
  const data = event.data?.json();
  if (data) {
    const options: NotificationOptions = {
      body: data.body,
      icon: './icons/pwa-192x192.png',
      badge: './icons/apple-touch-icon-180x180.png'
    };
    event.waitUntil(self.registration.showNotification(data.title, options));
  }
});

self.addEventListener('notificationclick', (event: NotificationEvent) => {
  console.log(event);
  event.notification.close();
  // 알림 클릭 시 동작 정의
  event.waitUntil(self.clients.openWindow('/'));
});

self.addEventListener('activate', (e) => {
  // setInterval(() => {
  //   console.log('%cServiceWorker is Ready', 'color:blue');
  // }, 1000);
});

function isValidManifest(
  manifest: any
): manifest is Array<{ url: string; revision: string | null }> {
  return (
    Array.isArray(manifest) &&
    manifest.every(
      (entry) =>
        typeof entry === 'object' && 'url' in entry && 'revision' in entry
    )
  );
}

console.log(self.__WB_MANIFEST);
// self.__WB_MANIFEST는 빌드 시 Workbox가 자동으로 생성합니다
// precacheAndRoute(self.__WB_MANIFEST);
if (isValidManifest(self.__WB_MANIFEST)) {
  precacheAndRoute(self.__WB_MANIFEST);
} else {
  console.warn('Invalid __WB_MANIFEST structure:', self.__WB_MANIFEST);
}
