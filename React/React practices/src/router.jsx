import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './components/app/app'
import Main from './pages/main/main'
import Test from './pages/test/test';

const Router = () => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/test" component={Test} />
        </Switch>
      </App>
    </BrowserRouter>
  )
}

export default Router
