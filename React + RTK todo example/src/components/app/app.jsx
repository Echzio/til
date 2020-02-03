import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '@/store/reducers/index';
import { hot } from 'react-hot-loader';

import { themeWrapper } from '@/hoc/themeWrapper';

import { TodoList } from '@/components/todoList/todoList'
import { AddTodo } from '@/components/addTodo/addTodo'

import { ChangeTheme } from '@/components/changeTheme/changeTheme';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export const App = hot(module)(themeWrapper(({ themeName }) => (
  <div className={`app ${themeName}`}>
    <TodoList />
    <br />
    <AddTodo />
    <br/>
    <ChangeTheme />
  </div>
)))

export const Root = hot(module)(() => (
  <Provider store={store}>
    <App />
  </Provider>
))