import { addTodo } from '@/store/reducers/todo';

export const delaySetTodo = todo => dispatch => {
  setTimeout(() => {
    dispatch(addTodo(todo))
  }, 1500)
}