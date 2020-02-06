import React from 'react';
import { removeTodo } from '@/store/reducers/todo';
import { useActions } from '@/hooks/index';

import { hot } from 'react-hot-loader';


export const RemoveTodo = hot(module)(({ id }) => {
  const { actionCreator: removeTodoBinded } = useActions([removeTodo]);

  return (
    <button onClick={() => removeTodoBinded(id)}>удалить todo</button>
  )
})