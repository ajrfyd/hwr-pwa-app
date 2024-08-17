import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

type MenuItemProps = {
  link?: string;
  title: string;
  content?: string;
  isRounded?: boolean;
  isCentered?: boolean;
};

const MenuItem = ({
  link,
  title,
  content,
  isRounded = false,
  isCentered = false
}: MenuItemProps) => {
  return (
    <>
      {link ? (
        <CustomLink to={`/${link}`}>
          <DottedOutlineItem
            className={`nes-container is-dark with-title ${
              isRounded ? 'is-rounded' : ''
            } ${isCentered ? 'is-centered' : ''}`}
          >
            <p className="title">{title}</p>
            <p>{content}</p>
          </DottedOutlineItem>
        </CustomLink>
      ) : (
        <React.Fragment>
          <DottedOutlineItem
            className={`nes-container is-dark with-title ${
              isRounded ? 'is-rounded' : ''
            } ${isCentered ? 'is-centered' : ''}`}
          >
            <p className="title">{title}</p>
            <p>{content}</p>
          </DottedOutlineItem>
        </React.Fragment>
      )}
    </>
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
