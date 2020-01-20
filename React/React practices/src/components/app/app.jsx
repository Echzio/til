import React from 'react';
import { hot } from 'react-hot-loader';
import { renderRoutes } from 'react-router-config';

import Header from '../header/header';
import { css } from 'astroturf';

css`
  @import-normalize;
`;

const App = ({ route }) => {
  return (
    <>
      <Header />
      {renderRoutes(route.routes)}
    </>
  );
};

export default hot(module)(App);
