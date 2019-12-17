import React from 'react'
import { hot } from 'react-hot-loader'
import * as Styles from './style'

const Todo = hot(module)(({ todo: {item, index}, removeTodo }) => {
  return(
    <>
    {item.active && (
      <Styles.todo>
      <h3>Задание номер {item.id}</h3>
      <h1>{item.name}</h1>
      <p>{item.description}</p>
      <button onClick={() => removeTodo(index)} type="button">Выполнено!</button>
    </Styles.todo>
    )}
    </>
  )
})

export { Todo }