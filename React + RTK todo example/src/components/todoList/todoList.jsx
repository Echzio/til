import React from 'react';
import { useSelector, shallowEqual } from 'react-redux'
import { RemoveTodo } from '@/components/removeTodo/removeTodo';


export const TodoList = () => {
  const { todos } = useSelector(({ todo: { todos } }) => ({ todos }), shallowEqual);

  return (
    <>
      {todos.map(({ id, text }) => (
        <div key={id}>
          <p style={{ border: '1px solid gray' }}>{text}</p>
          <RemoveTodo id={id} />
        </div>
      ))}
    </>
  )
}