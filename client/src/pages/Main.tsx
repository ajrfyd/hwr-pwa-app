import MenuItem from '@/components/MenuItem';
import Flex from '@/components/Flex';
import useInitRole from '@/hooks/useInitRole';

const Main = () => {
  useInitRole();

  return (
    // <DottedOutline>
    <Flex
      dir="col"
      cName="nes-container is-rounded"
      align="center"
      gap="1rem"
      style={{ height: '95vh' }}
    >
      <div
        style={{ flex: 1, width: '100%' }}
        className="nes-container is-rounded nes-btn is-error"
      />
      <div
        style={{ flex: 2, width: '100%' }}
        className="nes-container is-rounded nes-btn is-warning"
      />
      <div
        style={{ flex: 3, width: '100%' }}
        className="nes-container is-rounded nes-btn is-success"
      />
      <div
        style={{ flex: 4, width: '100%' }}
        className="nes-container is-rounded nes-btn is-primary"
      />
      <Flex gap="1rem" style={{ width: '100%', boxSizing: 'border-box' }}>
        <MenuItem
          link="admin"
          title="Admin"
          isCentered
          style={{ flex: 1, minWidth: 0 }}
        />
        <MenuItem
          link="user"
          title="User"
          isCentered
          style={{ flex: 1, minWidth: 0 }}
        />
      </Flex>
      <div
        style={{ flex: 4, width: '100%' }}
        className="nes-container is-rounded nes-btn is-primary"
      />
      <div
        style={{ flex: 3, width: '100%' }}
        className="nes-container is-rounded nes-btn is-success"
      />
      <div
        style={{ flex: 2, width: '100%' }}
        className="nes-container is-rounded nes-btn is-warning"
      />
      <div
        style={{ flex: 1, width: '100%' }}
        className="nes-container is-rounded nes-btn is-error"
      />
    </Flex>
    // </DottedOutline>
  );
};

export default Main;
