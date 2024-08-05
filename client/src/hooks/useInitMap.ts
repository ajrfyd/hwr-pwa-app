import { useEffect, useState } from 'react';
import newMapScript from '../lib/utils/mapScript';

const useInitMap = () => {
  const [map, setMap] = useState();

  useEffect(() => {
    newMapScript(
      `//dapi.kakao.com/v2/maps/sdk.js?appkey=${
        import.meta.env.VITE_KAKAO_MAP_KEY
      }&autoload=false`
    ).then(() => {
      window.kakao.maps.load(() => {
        const mapContainer = document.getElementById('map');
        const options = {
          center: new window.kakao.maps.LatLng(
            37.4435175486468,
            127.179966798375
          ),
          level: 3
        };
        const map = new window.kakao.maps.Map(mapContainer, options);
        setMap(window.kakao.maps);
      });
    });
  }, []);
  return { map };
};

export default useInitMap;
