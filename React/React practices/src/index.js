import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { rootReducer } from './core/reducers/index';

const Router = lazy(() => import('./router'));
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

const Root = () => {
  return (
    <Provider store={store}>
      <Suspense fallback="loading...">
        <Router />
      </Suspense>
    </Provider>
  );
};

render(<Root />, document.getElementById('app'));
