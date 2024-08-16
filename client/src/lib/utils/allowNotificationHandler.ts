import { messaging } from '../firebase';
import { getToken } from 'firebase/messaging';
import { registerServiceWorker } from './registerServiceWorker';

const allowNotificationHandler = async () => {
  registerServiceWorker();
  try {
    const permission = await Notification.requestPermission();

    if (permission === 'granted') {
      const token = await getToken(messaging, {
        vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
      });

      if (token) {
        // sendTokenToServer(token); // (토큰을 서버로 전송하는 로직)
        console.log(token);
      } else {
        alert('토큰 등록이 불가능 합니다. 생성하려면 권한을 허용해주세요');
      }
    } else if (permission === 'denied') {
      alert(
        'Push 권한이 차단되었습니다. 알림을 사용하시려면 권한을 허용해주세요'
      );
    }
  } catch (error) {
    console.error('토큰 가져오기에 실패했습니다.', error);
  }
};

export default allowNotificationHandler;
