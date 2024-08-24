import { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type TimeInputProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  forr: string;
};

const TimeInput = ({ title, forr, ...props }: TimeInputProps) => {
  return (
    <Container className="nes-field">
      <label htmlFor={forr}>{title}</label>
      <input type="time" id={forr} className="nes-input" {...props} />
    </Container>
  );
};

export default TimeInput;

const Container = styled.div``;
