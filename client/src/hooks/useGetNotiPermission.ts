import { useState, useCallback } from 'react';
import notify from '@/lib/utils/notify';
//! 이거 없애보자

const useGetNotiPermission = () => {
  // const [permission, setPermission] = useState('');
  const [permission, setPermission] = useState(Notification.permission);

  // const getNotiPermission = useCallback(async () => {
  //   const result = await Notification.requestPermission();
  //   setPermission(result);
  // }, [permission]);

  // useEffect(() => {
  //   getNotiPermission();
  // }, [permission]);

  const requestPermission = useCallback(async () => {
    if (!('Notification' in window)) {
      notify('이 기기는 알림을 지원하지 않습니다.');
      return;
    }

    try {
      const result = await Notification.requestPermission();
      if (result === 'denied') notify('알림 권한 설정을 거부하였습니다.');
      if (result === 'granted') notify('알림 권한이 설정되었습니다.');
      setPermission(result);
      return result;
    } catch (e) {
      if (e instanceof Error) notify(e.message);
      notify('알 수 없는 에러가 발생하였습니다. ');
    }
  }, []);

  // return [permission];
  return { permission, requestPermission };
};

export default useGetNotiPermission;
