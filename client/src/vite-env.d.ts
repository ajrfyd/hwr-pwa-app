/// <reference types="vite/client" />
/// <reference types="vite-plugin-pwa/client" />
interface Window {
  kakao: any;
}

declare interface Window {
  workbox: any;
}

declare const self: ServiceWorkerGlobalScope & typeof globalThis;
