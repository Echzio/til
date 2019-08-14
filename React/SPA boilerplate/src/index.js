import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
const App = lazy(() => import('./components/App'))
import './scss/style.scss';

const Root = () => {
  return (
    <Suspense fallback="loading">
      <App />
    </Suspense>
  )
}

render(<Root />, document.getElementById('app'));