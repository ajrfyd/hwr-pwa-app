import styled from 'styled-components';
import { ColorKeys, colorMapper } from '@/types/mapper';

type BadgeProps = {
  title: string;
  title2?: string;
  color?: ColorKeys;
  color2?: ColorKeys;
};

const Badge = ({ title, color, color2, title2 = '' }: BadgeProps) => {
  return (
    <Container className={`nes-badge ${color2 ? 'is-splited' : ''}`}>
      <span className={`${color ? colorMapper[color] : ''}`}>{title}</span>
      {color2 && title2 && (
        <span className={colorMapper[color2]}>{title2}</span>
      )}
    </Container>
  );
};

export default Badge;

const Container = styled.p`
  @media (max-width: 600px) {
    width: 100%;
  }
`;
