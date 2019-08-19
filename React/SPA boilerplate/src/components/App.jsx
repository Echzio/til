import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import styled from '@emotion/styled';

const H1 = styled.h1`
  font-size: 2rem;
`;

const App = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    setTitle('Hello, world');
  });

  return <H1>{title}</H1>;
};

export default hot(module)(App);
