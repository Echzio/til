import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';

import '@/assets/styles/style.scss';

const App = lazy(() => import('./App'));

const Root = () => (
  <Suspense fallback="loading">
    <App />
  </Suspense>
);

render(<Root />, document.getElementById('app'));
