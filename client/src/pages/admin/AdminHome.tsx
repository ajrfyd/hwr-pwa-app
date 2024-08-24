import DottedOutline from '@/components/DottedOutline';
import { useEffect } from 'react';
import { registerServiceWorker } from '@/lib/utils/registerServiceWorker';
import { Outlet } from 'react-router-dom';
import NavHeader from '@/components/NavHeader';
import useInitRole from '@/hooks/useInitRole';

const AdminHome = () => {
  useInitRole();
  useEffect(() => {
    registerServiceWorker();

    return () => {
      if (navigator.serviceWorker.controller) {
        navigator.serviceWorker.controller.postMessage({
          message: 'Test Post Message'
        });
      }
    };
  }, []);

  // const test = async () => {
  //   if (!navigator.serviceWorker) return;
  //   if (navigator.serviceWorker.controller) {
  //     console.log('controller');
  //     navigator.serviceWorker.controller.postMessage({
  //       message: '!@!'
  //     });
  //   }
  //   if ('serviceWorker' in navigator) {
  //     console.log('service');
  //     // navigator.serviceWorker.controller.postMessage({type: 'FROM_REACT', payload: someData});
  //   }
  //   fetch('https://jsonplaceholder.typicode.com/posts').then(console.log);
  // };

  return (
    <DottedOutline>
      <NavHeader />
      <Outlet />
      {/* <i className="nes-icon is-large star" onClick={test}></i> */}
    </DottedOutline>
  );
};

export default AdminHome;
