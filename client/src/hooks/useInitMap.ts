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
        navigator.geolocation.getCurrentPosition((r) => {
          const mapContainer = document.getElementById('map');
          const crtLoc = new window.kakao.maps.LatLng(
            r.coords.latitude,
            r.coords.longitude
          );
          const options = {
            center: new window.kakao.maps.LatLng(
              // 37.4435175486468,
              // 127.179966798375
              r.coords.latitude,
              r.coords.longitude
            ),
            level: 3
          };
          // console.log(r.coords);
          const map = new window.kakao.maps.Map(mapContainer, options);
          let coords = new window.kakao.maps.LatLng(
            37.4435175486468,
            127.179966798375
          );
          let marker = new window.kakao.maps.Marker({ map, position: coords });
          // let marker = new window.kakao.maps.Marker({
          //   map: map,
          //   position: {
          //     lat: 37.4435175486468,
          //     lng: 127.179966798375
          //   }
          // });
          // new window.kakao.maps.InfoWindow({});

          // let marker = new window.kakao.maps.Marker({
          //   map,
          //   position: {
          //     lat: 37.4435175486468,
          //     lng: 127.179966798375
          //   }
          // });

          // 인포윈도우로 장소에 대한 설명을 표시합니다
          // var infowindow = new window.kakao.maps.InfoWindow({
          //   content:
          //     '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
          // });
          // infowindow.open(map, marker);
          var infowindow = new window.kakao.maps.InfoWindow({
            content:
              '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>'
          });
          infowindow.open(map, marker);
          map.setCenter(crtLoc);
          setMap(window.kakao.maps);
        });
      });
    });
  }, []);
  return { map };
};

export default useInitMap;
