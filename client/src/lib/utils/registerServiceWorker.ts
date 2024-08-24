import notify from './notify';

export const registerServiceWorker = () => {
  if ('serviceWorker' in navigator) {
    window.addEventListener('load', async () => {
      try {
        const registration = await navigator.serviceWorker.register(
          '/firebase-messaging-sw.js'
        );
        // console.log(registration);

        if (registration.installing) {
          console.log('Service worker installing');
        } else if (registration.waiting) {
          console.log('Service worker installed');
        } else if (registration.active) {
          console.log('Service worker active');
        }
      } catch (e) {
        if (e instanceof Error) notify(e.message);
      }

      // .then((registration) => {
      //   console.log(
      //     'Service Worker가 scope에 등록되었습니다.:',
      //     registration.scope
      //   );
      // })
      // .catch((err) => {
      //   console.log('Service Worker 등록 실패:', err);
      // });
    });
  }
};
