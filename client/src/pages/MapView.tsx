import { useEffect } from 'react';
import useInitMap from '../hooks/useInitMap';
import styled from 'styled-components';
import notify from '@/lib/utils/notify';
// import socketStore from '../store/socket';

const MapView = () => {
  // const mapRef = useRef<HTMLDivElement | null>(null);
  useInitMap();
  // const [subscription, setSubscription] = useState<PushSubscription | null>(
  // null
  // );

  useEffect(() => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      navigator.serviceWorker.ready.then(async (registration) => {
        if (registration.active) {
          // setInterval(() => {
          //   fetch('https://jsonplaceholder.typicode.com/comments').then(
          //     console.log
          //   );
          // }, 5000);
          // setInterval(() => {
          //   console.log('worker');
          // }, 3000);
          // setInterval(() => {
          //   console.log('Test activate');
          //   console.log(
          //     navigator.geolocation.getCurrentPosition((r) =>
          //       console.log(r.coords)
          //     )
          //   );
          // }, 2000);
        }
        // const sub = await registration.pushManager.getSubscription();
        // setSubscription(sub);
      });
    }
  }, []);

  const subscribeUser = async () => {
    if ('serviceWorker' in navigator && 'PushManager' in window) {
      const registration = await navigator.serviceWorker.ready;
      console.log(registration);
      if (registration.installing) {
        console.log('Installing');
      } else if (registration.waiting) {
      } else if (registration.active) {
        console.log('Active!');
        console.log('Wainting');
        // setInterval(() => {
        //   console.log('Test activate');
        // }, 2000);
        fetch('https://jsonplaceholder.typicode.com/comments').then(
          console.log
        );
      }

      const sub = await registration.pushManager.subscribe({
        userVisibleOnly: true,
        applicationServerKey: import.meta.env.VITE_WEB_PUSH_PUBLIC_KEY
      });

      // setSubscription(sub);
      console.dir(sub);
      notify('test', 2000);

      //& 서버에 구독 정보 전송
      // if (isConnected) {
      //   console.log('??????');
      //   console.log(sub);
      //   emit('sub', JSON.stringify(sub));
      //   emit('test', 'lorem');
      // }
      // await fetch('/api/subscribe', {
      //   method: 'POST',
      //   body: JSON.stringify(sub),
      //   headers: {
      //     'Content-Type': 'application/json'
      //   }
      // });
    }
  };

  return (
    <MapContainer id="map">
      <Btn onClick={subscribeUser} />
      {/* <Btn2 onClick={() => notify('WWWW@@')} /> */}
    </MapContainer>
  );
};

export default MapView;

const MapContainer = styled.div`
  width: 100%;
  height: 100%;
  height: 100%;
  position: relative;
`;

const Btn = styled.button`
  position: absolute;
  bottom: 5rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  border: 3px solid red;
  border-radius: 50%;
  cursor: pointer;
  z-index: 9999;
`;
