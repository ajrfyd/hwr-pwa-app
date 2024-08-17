import { PropsWithChildren } from 'react';
import styled from 'styled-components';

const DottedOutline = ({ children }: PropsWithChildren) => {
  return (
    <DottedOutlineContainer className="nes-container is-rounded">
      {children}
    </DottedOutlineContainer>
  );
};

export default DottedOutline;

const DottedOutlineContainer = styled.div`
  &.nes-container.is-rounded {
    height: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`;
