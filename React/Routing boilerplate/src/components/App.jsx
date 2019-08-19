import React from 'react';
import { hot } from 'react-hot-loader';
import Header from './Header';
import Footer from './Footer';

const App = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

export default hot(module)(App);
