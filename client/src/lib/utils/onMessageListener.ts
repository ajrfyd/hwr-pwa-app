import { messaging } from '../firebase';
import { onMessage } from 'firebase/messaging';

const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log('OnMessaging!!');
      resolve(payload);
    });
  });

export default onMessageListener;
