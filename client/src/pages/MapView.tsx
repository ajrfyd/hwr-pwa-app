import useInitMap from '../hooks/useInitMap';
import styled from 'styled-components';

const MapView = () => {
  const { map } = useInitMap();

  return (
    <MapContainer id="map">
      <Btn onClick={() => console.log(map)} />
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
  bottom: 1rem;
  right: 1rem;
  width: 50px;
  height: 50px;
  border: 3px solid red;
  border-radius: 50%;
  cursor: pointer;
  z-index: 9999;
`;
