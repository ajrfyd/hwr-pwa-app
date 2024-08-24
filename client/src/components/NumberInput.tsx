import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type NumberInputProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  forr: string;
};
const NumberInput = ({ title, forr, ...props }: NumberInputProps) => {
  return (
    <Container>
      <label htmlFor={forr}>{title}</label>
      <input type="number" min={0} id={forr} className="nes-input" {...props} />
    </Container>
  );
};

export default NumberInput;

const Container = styled.div`
  /* margin-top: 0.5rem; */
`;
