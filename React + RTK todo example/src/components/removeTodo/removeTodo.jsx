import React from 'react';
import { removeTodo } from '@/store/reducers/todo';
import { useActions } from '@/hooks/index';


export const RemoveTodo = ({ id }) => {
  const { actionCreator: removeTodoBinded } = useActions([removeTodo]);

  return (
    <button onClick={() => removeTodoBinded(id)}>удалить todo</button>
  )
}