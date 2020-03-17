import React, { useRef } from 'react'
import { useSelector } from 'react-redux'
import { useActions } from '@/hooks/index';

import { currentTodoId } from '@/store/selectors/index'
import { delaySetTodo } from '@/store/actions/index';

export const AddTodo = () => {
  const text = useRef(null);
  const { delaySetTodo: delaySetTodoBinded } = useActions([delaySetTodo]);
  const { currentId } = useSelector(({ todo: { todos } }) => ({
    currentId: currentTodoId(todos)
  }))

  return (
    <div>
      <div>
        <label htmlFor="text">text:</label>
        <input id="text" ref={text} type="text" />
      </div>
      <button onClick={() => delaySetTodoBinded({
        id: currentId,
        text: text.current.value,
      })}>добавить todo</button>
    </div >
  )
}