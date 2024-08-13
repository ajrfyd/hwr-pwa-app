self.addEventListener('push', (e) => {
  if (!e) return;

  const resultData = e.data.json().notification;
  const { title, body, tag, icon } = resultData;
  const options = {
    body,
    icon,
    tag,
    ...resultData
  };
  console.log(resultData, options);
  // console.log(self);

  if (Notification.permission === 'granted') {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.ready.then((registration) => {
        registration.showNotification(title, options);
      });
    }
  }
  e.waitUntil(self.registration.showNotification(title, options));
  // self.registration.showNotification(title, options);
});

// function showNotification(title, options) {
//   console.log(Notification.permission);
//   Notification.requestPermission().then((result) => {
//     if (result === 'granted') {
//       navigator.serviceWorker.ready.then((registration) => {
//         registration.showNotification(title, {
//           body: options.body,
//           icon: options.icon,
//           vibrate: [200, 100, 200, 100, 200, 100, 200],
//           tag: options.tag
//         });
//       });
//     }
//   });
// }
