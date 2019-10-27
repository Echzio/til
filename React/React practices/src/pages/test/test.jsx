import React, { useReducer, useEffect } from 'react';
import { hot } from 'react-hot-loader';

const Page2 = () => {
  return <h2>page 2</h2>;
};

const Page1 = () => {
  return <h1>Page 1</h1>;
};

const pages = [<Page1 />, <Page2 />];

const reducer = (state, action) => {
  switch (action.type) {
    case 'back':
      return {
        ...state,
        step: state.step - 1 >= 0 ? state.step - 1 : state.step,
      };
    case 'next':
      return {
        ...state,
        step: state.step + 1 < pages.length ? state.step + 1 : state.step,
      };
    default:
      return state;
  }
};

const Test = () => {
  const [step, dispatch] = useReducer(reducer, { step: 0 });


  return (
    <>
      {pages[step.step]}
      <button onClick={() => dispatch({ type: 'back' })}>back</button>
      <button onClick={() => dispatch({ type: 'next' })}>next</button>
    </>
  );
};

export default hot(module)(Test);
