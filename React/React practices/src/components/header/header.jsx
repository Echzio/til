import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'astroturf';

const LinkWrapper = styled('div')`
  display: grid;
`;

const Header = () => {
  return (
    <LinkWrapper>
      <NavLink exact to="/">home</NavLink>
      <NavLink to="/test">test</NavLink>
    </LinkWrapper>
  );
};

export default Header;
