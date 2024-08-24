import styled from 'styled-components';

type NoteBallonProps = {
  text: string;
};

const NoteBaloon = ({ text }: NoteBallonProps) => {
  return <Baloon className="nes-balloon nes-pointer">{text}</Baloon>;
};

export default NoteBaloon;

const Baloon = styled.p`
  font-size: 1.5rem;
`;
