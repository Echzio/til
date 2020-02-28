import React, { useState, useEffect } from 'react';
import { hot } from 'react-hot-loader';
import styled from '@emotion/styled';
import ironMan from '@/assets/img/Tony-Stark-Iron-Man-Comic-Face-Cover.webp';

const H1 = styled.h1`
  font-size: 2rem;
`;

const App = () => {
  const [title, setTitle] = useState('');
  useEffect(() => {
    setTitle('Hello, world');
  });

  return (
    <div>
      <H1>{title}</H1>
      <img src={ironMan} />
    </div>
  )
};

export default hot(module)(App);
