import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos: [
      {
        id: 1,
        text: 'first todo'
      }
    ]
  },
  reducers: {
    addTodo(state, action) {
      return {
        ...state,
        todos: [
          ...state.todos,
          action.payload,
        ]
      }
    },
    removeTodo(state, action) {
      return {
        ...state,
        todos: state.todos.filter(({ id }) => id !== action.payload)
      }
    }
  }
})

export const { addTodo, removeTodo } = todoSlice.actions;

export default todoSlice.reducer