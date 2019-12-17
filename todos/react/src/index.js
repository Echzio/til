import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
const App = lazy(() => import('./components/app/app'));
import { Main } from './pages/main/Main'

const Root = () => {
  return (
    <Suspense fallback="loading">
      <App>
        <Main />
      </App>
    </Suspense>
  );
};

render(<Root />, document.getElementById('app'));
