// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getMessaging, getToken, onMessage } from 'firebase/messaging';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FB_API_KEY,
  authDomain: import.meta.env.VITE_FB_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FB_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FB_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FB_MSG_SENDER_ID,
  appId: import.meta.env.VITE_FB_APP_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// firebase.initializeApp(firebaseConfig);

const messaging = getMessaging(app);

getToken(messaging, { vapidKey: import.meta.env.VITE_FB_VAPID_KEY })
  .then((curToken) => {
    if (curToken) {
      console.log(curToken);
    } else {
      console.log('No token');
    }
  })
  .catch(console.log);

export function requestPermission() {
  console.log('Requesting permission...');
  Notification.requestPermission().then((permission) => {
    if (permission === 'granted') {
      console.log('Notification permission granted.');
    }
  });
}

onMessage(messaging, (payload) => {
  // console.log("알림 도착 ", payload);
  console.log(payload);
  if (!payload.notification) return;
  console.log(payload.notification, 'in');
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body
  };

  if (Notification.permission === 'granted') {
    new Notification(notificationTitle as string, notificationOptions);
  }
});
