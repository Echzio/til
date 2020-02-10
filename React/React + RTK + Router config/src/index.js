import React from 'react'
import { render } from 'react-dom';

import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '@/store/reducers/index'

import { BrowserRouter } from 'react-router-dom'
import { renderRoutes } from 'react-router-config'
import { routes } from '@/router'


const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      {renderRoutes(routes)}
    </BrowserRouter>
  </Provider>
)

render(<Root />, document.getElementById('app'))