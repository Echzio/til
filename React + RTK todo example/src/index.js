import React from 'react'
import { render } from 'react-dom';
import App from '@/components/app/app';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'
import { rootReducer } from '@/store/reducers/';

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
})

const Root = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

render(<Root />, document.getElementById('app'))