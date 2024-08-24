import { RewindIcon } from 'lucide-react';
import Flex from './Flex';
import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const titleMapper = {
  createStop: '정류장 등록',
  updateStop: '정류장 수정'
} as const;

type TitleKeys = keyof typeof titleMapper;

const NavHeader = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [_, trigger] = location.pathname.slice(1).split('/');

  return (
    <Flex
      cName="nes-container"
      gap="1rem"
      justify="center"
      style={{ position: 'relative' }}
    >
      {trigger && (
        <BackIcon
          size={40}
          style={{
            position: 'absolute',
            top: '50%',
            left: '5rem',
            transform: 'translate(0, -50%)',
            cursor: 'pointer'
          }}
          onClick={() => navigate(-1)}
        />
      )}
      {!trigger && (
        <>
          <i className="nes-icon is-large heart"></i>
          <i className="nes-icon is-large heart"></i>
          <i className="nes-icon is-large heart"></i>
          <i className="nes-icon is-large heart"></i>
          <i className="nes-icon is-large heart"></i>
          <i className="nes-icon is-large heart"></i>
          <i className="nes-icon is-large heart"></i>
        </>
      )}
      {trigger && <Title>{titleMapper[trigger as TitleKeys]}</Title>}
    </Flex>
  );
};

export default NavHeader;

const Title = styled.p`
  font-size: 2.5rem;
  font-weight: semi-bold;

  @media (max-width: 600px) {
    font-size: 1.5rem;
  }
`;

const BackIcon = styled(RewindIcon)`
  @media (max-width: 600px) {
    /* display: none; */
    width: 24px;
    height: 24px;
    left: 1.4rem !important;
  }
`;
