import React, { InputHTMLAttributes } from 'react';
import styled from 'styled-components';

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  title: string;
  forr: string;
};

const TextInput = ({ title, forr, ...props }: InputProps) => {
  // return (
  //   <Container className="nes-field">
  //     <label htmlFor={for}>{title}</label>
  //     <input type="text" id={for} className="nes-input" />
  //   </Container>
  // )
  return (
    <Container className="nes-field">
      <label htmlFor={forr}>{title}</label>
      <input type="text" id={forr} className="nes-input" {...props} />
    </Container>
  );
};

export default React.memo(TextInput);

const Container = styled.div`
  & + & {
    /* margin-top: 0.5rem; */
  }
`;
