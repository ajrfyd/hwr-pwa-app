import styled from 'styled-components';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import onMessageListener from './lib/utils/onMessageListener';
import { Route, Routes } from 'react-router-dom';
import MapView from './pages/MapView';
import Home from './pages/Home';
// import MapView from '@pages/MapView';
// import { requestPermission } from './lib/firebase';
// import './lib/firebase';
// import socketStore from './store/socket';
// import useInitMap from './hooks/useInitMap';

const App = () => {
  // useInitMap();
  // const { connect, disconnect } = socketStore();

  useEffect(() => {
    // requestPermission();
    // connect();
    // return () => disconnect();
    onMessageListener();
  }, []);

  return (
    <Container>
      {/* <DottedOutline className="nes-container is-rounded"> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/map" element={<MapView />} />
      </Routes>
      {/* </DottedOutline> */}
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  padding: 0.5rem;
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 1rem; */
`;
