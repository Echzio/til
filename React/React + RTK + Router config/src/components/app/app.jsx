import React from 'react'
import { hot } from 'react-hot-loader/root';

import { renderRoutes } from 'react-router-config'
import { routes } from '@/router/'

const App = () => {
  return (
    <div>
      <p>header</p>
      {renderRoutes(routes)}
      <p>footer</p>
    </div>
  )
}

export default hot(App)