self.addEventListener('push', (e) => {
  if (!e) return;
  // console.log(e.data.json());
  // const resultData = e.data.json();
  // const { title, body, tag, icon } = resultData;
  // const options = {
  //   body,
  //   icon,
  //   tag,
  //   ...resultData
  // };
  // console.log(resultData, options);

  console.log('________________');
  console.log(e.data.json());
  const { data } = e.data.json();
  const { title, body, icon } = data;
  console.log(body, title);
  const options = { body, icon, ...data };

  // if (Notification.permission === 'granted') {
  //   if (navigator.serviceWorker) {
  //     navigator.serviceWorker.ready.then((registration) => {
  //       console.log('here');
  //       registration.showNotification(title, options);
  //     });
  //   }
  // }
  // e.waitUntil(self.registration.showNotification(title, options));
  console.log(options);
  console.log(self.registration.showNotification);
  self.registration.showNotification(title, options);
});

self.addEventListener('message', (e) => {
  console.log('=========messageLine============');
  console.log(e.data);
});

self.addEventListener('fetch', (e) => {
  // console.log(e);
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
