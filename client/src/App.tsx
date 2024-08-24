import { ToastContainer } from 'react-toastify';
import { Route, Routes } from 'react-router-dom';
import styled from 'styled-components';
import Line from './pages/Line';
import Main from './pages/Main';
import AdminHome from './pages/admin/AdminHome';
import AdminMenu from './components/admin/AdminMenu';
import UserMenu from './components/user/UserMenu';
import UserHome from './pages/user/UserHome';
import CreateStop from './pages/admin/CreateStop';
import 'react-toastify/dist/ReactToastify.css';
import onMessageListener from './lib/utils/onMessageListener';
import { useEffect } from 'react';
import { registerServiceWorker } from './lib/utils/registerServiceWorker';
import RegisterStop from './pages/user/RegisterStop';

const App = () => {
  useEffect(() => {
    registerServiceWorker();
    onMessageListener();
  }, []);

  return (
    <Container>
      <Routes>
        <Route path="/" element={<Main />} />

        <Route path="/admin" element={<AdminHome />}>
          <Route index element={<AdminMenu />} />
          {/* <Route path="line" element={<Line />} /> */}
          <Route path="createStop" element={<CreateStop />} />
        </Route>
        <Route path="/user" element={<UserHome />}>
          <Route index element={<UserMenu />} />
          <Route path="line" element={<Line />} />
          <Route path="register" element={<RegisterStop />} />
        </Route>
      </Routes>
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
