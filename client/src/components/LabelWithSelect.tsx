import styled, { CSSProperties } from 'styled-components';
import Flex from './Flex';
import Badge from './Badge';
import { ColorKeys } from '@/types/mapper';
import { ChangeEvent } from 'react';

type LabelWithSelectProps = {
  style?: CSSProperties;
  gap?: CSSProperties['gap'];
  item: {
    title: string;
    list: { name: string; checked: boolean; value: string }[];
    name: string;
  };
  labelColor?: ColorKeys;
  onChangeValue: (e: ChangeEvent<HTMLInputElement>) => void;
};

const LabelWithSelect = ({
  gap = '1rem',
  style,
  item,
  labelColor = 'dark',
  onChangeValue
}: LabelWithSelectProps) => {
  return (
    <Container style={{ ...style, gap }}>
      <Badge title={item.title} color={labelColor} />
      <Flex dir="row" justify="space-around">
        {item.list.map((li) => (
          <Item key={li.name}>
            <input
              type="radio"
              className="nes-radio"
              name={item.name}
              checked={li.checked}
              onChange={onChangeValue}
              value={li.value}
            />
            <span>{li.name}</span>
          </Item>
        ))}
      </Flex>
    </Container>
  );
};

export default LabelWithSelect;

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

// const Badge = styled.p``;

const Item = styled.label`
  span {
    /* font-size: 1.5rem; */
  }
`;
