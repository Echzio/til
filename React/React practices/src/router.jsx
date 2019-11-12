import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import App from './components/app/app'
import Main from './pages/main/main'
import Test from './pages/test/test'
import Tabs from './pages/tabs/tabs'

const Router = () => {
  return (
    <BrowserRouter>
      <App>
        <Switch>
          <Route exact path="/" component={Main} />
          <Route path="/test" component={Test} />
          <Route path="/tabs" component={Tabs} />
        </Switch>
      </App>
    </BrowserRouter>
  )
}

export default Router
