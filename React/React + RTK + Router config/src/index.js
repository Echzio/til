import React from 'react';
import { render } from 'react-dom';

import { createStore } from '@/store/createStore';
import { Provider } from 'react-redux';

import { BrowserRouter } from 'react-router-dom';

import App from '@/app';

const store = createStore();

const Root = () => (
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);

render(<Root />, document.getElementById('app'));
