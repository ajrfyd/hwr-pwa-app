import { ButtonHTMLAttributes, CSSProperties } from 'react';
import styled from 'styled-components';
import { ColorKeys } from '@/types/mapper';
import { colorMapper } from '@/types/mapper';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  title: string;
  color?: ColorKeys;
  style?: CSSProperties;
};

const Button = ({ title, color = 'primary', style, ...props }: ButtonProps) => {
  return (
    <ButtonContainer
      className={`nes-btn ${colorMapper[color]}`}
      {...props}
      style={{ ...style }}
    >
      {title}
    </ButtonContainer>
  );
};

export default Button;

const ButtonContainer = styled.button``;
