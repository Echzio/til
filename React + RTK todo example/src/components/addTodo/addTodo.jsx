import React, { useRef, useCallback } from 'react'
import { hot } from 'react-hot-loader';
import { useSelector, useDispatch } from 'react-redux'

import { currentTodoId } from '@/store/selectors/index'
import { delaySetTodo } from '@/store/actions/index';

export const AddTodo = hot(module)(() => {
  const text = useRef(null);
  const dispatch = useDispatch();

  const { currentId } = useSelector(({ todo: { todos } }) => ({
    currentId: currentTodoId(todos)
  }))

  const setAddTodo = useCallback(() => {
    dispatch(delaySetTodo({
      id: currentId,
      text: text.current.value,
    }))
  }, [dispatch, currentId])


  return (
    <div>
      <div>
        <label htmlFor="text">text:</label>
        <input id="text" ref={text} type="text" />
      </div>
      <button onClick={setAddTodo}>добавить todo</button>
    </div >
  )
})