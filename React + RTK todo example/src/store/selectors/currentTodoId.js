import { createSelector } from '@reduxjs/toolkit'

export const currentTodoId = createSelector(
  [todos => todos],
  todos => {
    if (todos[todos.length - 1]) {
      if (todos[todos.length - 1].id) {
        return todos[todos.length - 1].id + Number((Math.random() * 10000).toFixed(0))
      } else {
        return Number((Math.random() * 10000).toFixed(0))
      }
    } else {
      return Number((Math.random() * 10000).toFixed(0))
    }
  }
)