import React from 'react';
import { hot } from 'react-hot-loader';
import Header from '../header/header';
import {css} from 'astroturf';

css`
  @import-normalize;
`;

const App = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

export default hot(module)(App);
