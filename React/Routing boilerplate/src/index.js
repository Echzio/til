import React, { lazy, Suspense } from 'react';
import { render } from 'react-dom';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
const App = lazy(() => import('./components/App'));
import MainPage from './components/MainPage';
import FirstPage from './components/FirstPage';
import SecondPage from './components/SecondPage';
import Error from './components/Error';
import './scss/style.scss';

render(
  <BrowserRouter>
    <Suspense fallback="loading...">
      <App>
        <Switch>
          <Route exact path="/" component={MainPage} />
          <Route path="/first" component={FirstPage} />
          <Route path="/second" component={SecondPage} />
          <Route path="*" component={Error} />
        </Switch>
      </App>
    </Suspense>
  </BrowserRouter>,
  document.getElementById('app'),
);
