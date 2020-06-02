import React from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from '@/store/reducers/index';
import logger from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import { rootSaga } from '@/store/sagas/';

import { BrowserRouter } from 'react-router-dom';
import App from '@/components/app/app';

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV !== 'production',
  middleware: process.env.NODE_ENV !== 'production' ? [logger, sagaMiddleware] : [sagaMiddleware],
});

sagaMiddleware.run(rootSaga);

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(<Root />, document.getElementById('app'));
