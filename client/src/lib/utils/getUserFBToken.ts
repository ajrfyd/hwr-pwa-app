import { getToken } from 'firebase/messaging';
import { messaging } from '../firebase';
// import notify from './notify';

const getUserFBToken = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: import.meta.env.VITE_FB_VAPID_KEY
    });
    return token;
  } catch (e) {
    console.log(e);
    // notify('토큰 발급에 실패하였습니다. 잠시 후 다시 시도해 주세요.');
    return null;
  }
};

export default getUserFBToken;
