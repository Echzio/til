import React, { useCallback } from 'react';
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import * as actions from '../../core/actions/index'

export const Main = () => {
  const { title } = useSelector(({ window1: { title } }) => ({ title }), shallowEqual);
  const dispatch = useDispatch();
  const changeTitle = useCallback(e => {
    dispatch(actions.setTitle(e.target.value))
  }, [dispatch])

  return (
    <>
      {console.log(`rerender main`)}
      <input type="text" value={title} onChange={changeTitle} />
      <p>{title}</p>
      <span>Main Page</span>
    </>
  );
};

