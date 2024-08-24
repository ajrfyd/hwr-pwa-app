import Flex from '@/components/Flex';
import { Outlet } from 'react-router-dom';
import NavHeader from '../../components/NavHeader';
import useInitRole from '@/hooks/useInitRole';

const UserHome = () => {
  useInitRole();

  return (
    <Flex cName="nes-container is-rounded" dir="col" gap="1rem">
      <NavHeader />
      <Outlet />
    </Flex>
  );
};

export default UserHome;
