import { CSSProperties } from 'styled-components';

type HrProps = {
  color?: CSSProperties['color'];
  mt?: CSSProperties['marginTop'];
};

const Hr = ({ color = 'red', mt = '.5rem' }: HrProps) => (
  <div
    style={{
      width: '100%',
      height: 0,
      border: `2px dotted ${color}`,
      margin: `${mt} 0`
    }}
  />
);

export default Hr;
