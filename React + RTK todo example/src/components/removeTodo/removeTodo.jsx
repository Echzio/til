import React, { useCallback } from 'react';
import { removeTodo } from '@/store/reducers/todo';

import { useDispatch } from 'react-redux'
import { hot } from 'react-hot-loader';



export const RemoveTodo = hot(module)(({ id }) => {
  const dispatch = useDispatch();
  const setRemoveTodo = useCallback(() => {
    dispatch(removeTodo(id))
  }, [dispatch, id])

  return (
    <button onClick={setRemoveTodo}>удалить todo</button>
  )
})