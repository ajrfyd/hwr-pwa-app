import { getStorage, setStorage } from '@/lib/utils/localStorageHandler';
import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const useInitRole = () => {
  const { pathname } = useLocation();
  const isMain = pathname === '/';
  const location = pathname.slice(1).split('/');
  const navigate = useNavigate();

  useEffect(() => {
    const role = getStorage('role');
    if (isMain) {
      if (!role) return;
      else return navigate(`/${role}`);
    }

    if (!role) return setStorage('role', location[0]);
    if (role) {
      if (role !== location[0]) navigate(`/${role}`);
    }
  }, []);
};

export default useInitRole;
