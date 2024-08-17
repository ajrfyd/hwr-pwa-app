import { useEffect } from 'react';
import useInitMap from '../hooks/useInitMap';
import styled from 'styled-components';
import allowNotificationHandler from '../lib/utils/allowNotificationHandler';
// import notify from '@/lib/utils/notify';
// import { requestPermission } from '@/lib/firebase';
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

  return (
    <MapContainer id="map">
      <Btn onClick={allowNotificationHandler} />
      {/* <Btn2 onClick={() => notify('WWWW@@')} /> */}
    </MapContainer>
  );
};

export default MapView;

const MapContainer = styled.div`
  width: 100%;
  height: 100vh;
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
