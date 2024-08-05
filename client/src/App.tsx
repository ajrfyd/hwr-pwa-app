import { Route, Routes } from 'react-router-dom';
import useInitMap from './hooks/useInitMap';
import styled from 'styled-components';
import MapView from '@pages/MapView';
import { useEffect } from 'react';
// import Home from '@pages/Home';

const App = () => {
  useInitMap();

  useEffect(() => {
    console.log(window.kakao);
  }, []);

  return (
    <Container>
      {/* <MapContainer id="map" /> */}
      <MapView />
      {/* <Routes>
        <Route path="/" element={<Map />} />
        <Route path="/setting" element={<Setting />} />
      </Routes> */}
      <Btn />
    </Container>
  );
};

export default App;

const Container = styled.div`
  position: relative;
  width: 700px;
  height: 100vh;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin: 0 auto;
`;

const MapContainer = styled.div`
  width: 500px;
  height: 100%;
  height: 700px;
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
`;
