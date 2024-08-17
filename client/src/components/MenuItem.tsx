import { Link } from 'react-router-dom';
import styled from 'styled-components';

type MenuItemProps = {
  link: string;
  title: string;
  content?: string;
};

const MenuItem = ({ link, title, content }: MenuItemProps) => {
  return (
    <CustomLink to={`/${link}`}>
      <DottedOutlineItem className="nes-container is-dark with-title">
        <p className="title">{title}</p>
        <p>{content}</p>
      </DottedOutlineItem>
    </CustomLink>
  );
};

export default MenuItem;

const CustomLink = styled(Link)`
  &:hover {
    text-decoration: none;
  }
`;

const DottedOutlineItem = styled.div`
  cursor: pointer;
  &.is-dark.with-title p.title {
    font-size: 1.5rem;
  }
`;
