import { useEffect, useState, useCallback } from 'react';

const useGetNotiPermission = () => {
  const [permission, setPermission] = useState('');

  const getNotiPermission = useCallback(async () => {
    const result = await Notification.requestPermission();
    setPermission(result);
  }, [permission]);

  useEffect(() => {
    getNotiPermission();
  }, [permission]);

  return [permission];
};

export default useGetNotiPermission;
