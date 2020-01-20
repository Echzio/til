import React from 'react';
import { useLocation } from 'react-router-dom'
import { NavLink } from 'react-router-dom';
import styled from 'astroturf';

const LinkWrapper = styled('div')`
  display: grid;
`;

const Header = () => {
  const { pathname } = useLocation();

  const memoLinks = ({ e, path }) => {
    pathname === path && e.preventDefault()
  }
  return (
    <LinkWrapper>
      <NavLink exact to="/"
        onClick={e => memoLinks({ e, path: '/' })}
      >home</NavLink>
      <NavLink to="/test"
        onClick={e => memoLinks({ e, path: '/test' })}
      >test</NavLink>
      <NavLink to="/tabs"
        onClick={e => memoLinks({ e, path: '/tabs' })}
      >tabs</NavLink>
      <NavLink
        to="/pagination"
        onClick={e => memoLinks({ e, path: '/pagination' })}
      >
        pagination
        </NavLink>
    </LinkWrapper>
  );
};

export default Header;
