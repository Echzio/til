import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '@/store/reducers/index';
import { hot } from 'react-hot-loader';

import { Router } from '@/components/router/router'

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

export const App = hot(module)(() => {
  return (
    <Provider store={store}>
      <div className="app">
        <Router />
      </div>
    </Provider>
  )
})
