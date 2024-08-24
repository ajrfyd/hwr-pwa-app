import { PropsWithChildren } from 'react';
import styled, { css, CSSProperties } from 'styled-components';

// type FlexProps<T extends React.ElementType> = PropsWithChildren & {
//   dir?: 'col' | 'row';
//   style?: CSSProperties;
//   justify?: CSSProperties['justifyContent'];
//   align?: CSSProperties['alignItems'];
//   cName?: string;
//   gap?: CSSProperties['gap'];
//   as?: T;
// };

type FlexProps = PropsWithChildren & {
  dir?: 'col' | 'row';
  style?: CSSProperties;
  justify?: CSSProperties['justifyContent'];
  align?: CSSProperties['alignItems'];
  cName?: string;
  gap?: CSSProperties['gap'];
  sec?: boolean;
};

const Flex = ({
  children,
  dir = 'row',
  style,
  justify,
  cName,
  gap,
  align,
  sec = false
}: FlexProps) => {
  if (sec)
    return (
      <SectionFlex
        style={{ ...style, justifyContent: justify, gap, alignItems: align }}
        className={`${cName}`}
        dir={dir}
      >
        {children}
      </SectionFlex>
    );
  return (
    <FlexContainer
      style={{ ...style, justifyContent: justify, gap, alignItems: align }}
      className={`${cName}`}
      dir={dir}
    >
      {children}
    </FlexContainer>
  );
};

export default Flex;

const FlexContainer = styled.div<Pick<FlexProps, 'dir'>>`
  display: flex;
  ${({ dir }) =>
    dir &&
    css`
      flex-direction: ${dir === 'row' ? 'row' : 'column'};
    `}
`;

const SectionFlex = styled.section<Pick<FlexProps, 'dir'>>`
  display: flex;
  ${({ dir }) =>
    dir &&
    css`
      flex-direction: ${dir === 'row' ? 'row' : 'column'};
    `}

  @media(max-width: 600px) {
    ${({ dir }) =>
      dir === 'row' &&
      css`
        flex-direction: column;
      `}
  }
`;
