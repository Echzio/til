import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

import { Private } from '@/components/private/private'
import { TodoList } from '@/components/todoList/todoList';
import { AddTodo } from '@/components/addTodo/addTodo';

export const Router = () => {
  const { auth } = useSelector(({ auth: { auth } }) => ({ auth }), shallowEqual);

  return (
    <>
      {!auth ? <Private /> : (
        <>
          <TodoList />
          <br />
          <AddTodo />
        </>
      )}
    </>
  )
}