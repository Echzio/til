import React from 'react';
import { render } from 'react-dom';

import { BrowserRouter } from 'react-router-dom';
import { renderRoutes } from 'react-router-config';
import { routes } from './router';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './core/reducers/index';

const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const Root = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>{renderRoutes(routes)}</BrowserRouter>
    </Provider>
  );
};

render(<Root />, document.getElementById('app'));
