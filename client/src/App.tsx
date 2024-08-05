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
