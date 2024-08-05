import useInitMap from './hooks/useInitMap';
import styled from 'styled-components';
import MapView from '@pages/MapView';
import { useEffect } from 'react';
// import Home from '@pages/Home';

const App = () => {
  useInitMap();

  useEffect(() => {
    // fetch('https://bus.hkound.pe.kr/api').then(console.log);
    fetch('https://bus.hkound.pe.kr/api')
      .then((res) => res.json())
      .then(console.log);
  }, []);

  return (
    <Container>
      <MapView />
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
