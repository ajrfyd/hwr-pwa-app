import { PropsWithChildren } from 'react';
import styled, { css } from 'styled-components';

type DottedOutline = {
  direction?: 'col' | 'row';
};

const DottedOutline = ({
  children,
  direction = 'col'
}: DottedOutline & PropsWithChildren) => {
  return (
    <DottedOutlineContainer
      className="nes-container is-rounded"
      direction={direction}
    >
      {children}
    </DottedOutlineContainer>
  );
};

export default DottedOutline;

const DottedOutlineContainer = styled.div<Pick<DottedOutline, 'direction'>>`
  &.nes-container.is-rounded {
    height: 100%;
    min-height: 50vh;
    display: flex;
    gap: 1rem;
    ${({ direction }) =>
      direction &&
      css`
        flex-direction: ${direction === 'col' ? 'column' : 'row'};
      `}
  }
`;
