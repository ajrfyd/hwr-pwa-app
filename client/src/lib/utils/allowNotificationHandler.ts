import notify from './notify';
// import { messaging } from '../firebase';
// import { getToken } from 'firebase/messaging';

const allowNotificationHandler = async () => {
  try {
    const permission = await Notification.requestPermission();
    if (permission === 'granted') return true;
    else if (permission === 'denied') return false;
    // if (permission === 'granted') {
    //   // const token = await getToken(messaging, {
    //   //   vapidKey: import.meta.env.VITE_FIREBASE_VAPID_KEY
    //   // });
    //   // if (token) {
    //   //   // sendTokenToServer(token); // (토큰을 서버로 전송하는 로직)
    //   //   notify(token);
    //   // } else {
    //   //   notify('토큰 등록이 불가능 합니다. 생성하려면 권한을 허용해주세요');
    //   // }
    // } else if (permission === 'denied') {
    //   notify(
    //     'Push 권한이 차단되었습니다. 알림을 사용하시려면 권한을 허용해주세요'
    //   );
    // }
  } catch (error) {
    notify('예상치 못한 에러가 발생 하였습니다. 다시 시도 해 주세요.');
  }
};

export default allowNotificationHandler;
