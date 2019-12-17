import React from 'react';
import { hot } from 'react-hot-loader';
import { Global } from '@emotion/core';
import * as Styles from './style';

const App = ({ children }) => {
  return (
    <>
      <Global styles={Styles.global} />
      <Styles.styledApp>
        {children}
      </Styles.styledApp>
    </>
  )
}

export default hot(module)(App);
