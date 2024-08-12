import styled from 'styled-components';
import MapView from '@pages/MapView';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { requestPermission } from './lib/firebase';
import './lib/firebase';
// import socketStore from './store/socket';
// import useInitMap from './hooks/useInitMap';

const App = () => {
  // useInitMap();
  // const { connect, disconnect } = socketStore();

  useEffect(() => {
    requestPermission();
    // connect();
    // return () => disconnect();
  }, []);

  return (
    <Container>
      <MapView />
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
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  /* align-items: center; */
  justify-content: center;
  margin: 0 auto;
`;
