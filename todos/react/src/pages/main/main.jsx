import React, { useState, useRef } from 'react'
import { hot } from 'react-hot-loader'
import { todos } from './static/todos'
import { Todo } from '../../components/todo/todo'
import {Modal} from '../../components/modal/modal'

const Main = hot(module)(() => {
  const [todoList, setTodoList] = useState(todos)
  const [toggleModal, setToggleModal] = useState(false)
  const nameInput = useRef(null);
  const descInput = useRef(null);

  const removeTodo = (index) => {
    setTodoList(prevState => {
      const currentArray = [...prevState];
      currentArray[index].active = false
      return currentArray
    })
  }

  const clearTodo = () => {
    setTodoList(prevState => {
      return prevState.map(item => ({ ...item, active: true }))
    })
  }

  const addTodo = () => {
    const [name, description] = [nameInput.current.value, descInput.current.value];

    if (name && description) {
      setTodoList(prevState => {
        return [
          ...prevState,
          {
            id: prevState.length + 1,
            name,
            active: true,
            description,
          }
        ]
      })
    } else {
      window.alert('не пытайся обамануть')
    }

  }

  return (
    <div>
      <div>
        <h1>Todo-list</h1>
      </div>
      <div className="todos">
        {todoList.map((item, index) => <Todo key={item.id} todo={{ item, index }} removeTodo={removeTodo} />)}
      </div>
      <button onClick={clearTodo} type="button">Вернуть все назад</button>
      <div>
        <p>Добавить еще задачу!</p>
        <label htmlFor="name">Введите название</label>
        <input ref={nameInput} id="name" type="text" />
        <br />
        <label htmlFor="desc">Введите описание</label>
        <input ref={descInput} id="desc" type="text" />
        <br />
        <button onClick={addTodo}>Добавить!</button>
      </div>
      <button onClick={() => setToggleModal(prevState => !prevState)}>показать/скрыть модалку</button>
      <Modal show={toggleModal} changeShow={setToggleModal} />
    </div>
  )
})

export { Main }