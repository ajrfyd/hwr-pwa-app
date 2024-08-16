import styled from 'styled-components';
import { useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import onMessageListener from './lib/utils/onMessageListener';
import { Link } from 'react-router-dom';
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
      {/* <MapView /> */}
      <DottedOutline className="nes-container is-rounded">
        <Link to="/register">
          <DottedOutlineItem className="nes-container is-dark with-title">
            <p className="title">사용자 등록</p>
            <p>승차 위치를 등록하려면 눌러 주세요.</p>
          </DottedOutlineItem>
        </Link>
        <DottedOutlineItem className="nes-container is-dark with-title">
          <p className="title">탑승 위치 등록</p>
          <p>승차 위치를 등록하려면 눌러 주세요.</p>
        </DottedOutlineItem>
        <DottedOutlineItem className="nes-container is-dark with-title">
          <p className="title">노선 보기</p>
          <p>탑승 위치를 변경하고 싶다면 눌러 주세요.</p>
        </DottedOutlineItem>
        <DottedOutlineItem className="nes-container is-dark with-title">
          <p className="title">승하차 변경</p>
          <p>탑승 위치를 변경하고 싶다면 눌러 주세요.</p>
        </DottedOutlineItem>
        <DottedOutlineItem className="nes-container is-dark with-title">
          <p className="title">지도 보기</p>
          <p>지도를 보려면 눌러 주세요.</p>
        </DottedOutlineItem>
      </DottedOutline>
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
  /* display: flex; */
  /* flex-direction: column; */
  /* gap: 1rem; */
`;

const DottedOutline = styled.div`
  &.nes-container.is-rounded {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;

const DottedOutlineItem = styled.div`
  cursor: pointer;
  &.is-dark.with-title p.title {
    font-size: 1.5rem;
  }
`;
