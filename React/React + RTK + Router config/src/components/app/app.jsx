import React from 'react'
import { hot } from 'react-hot-loader'

import { renderRoutes } from 'react-router-config'

export const App = hot(module)(({ route: { routes } }) => {
  return (
    <div>
      <p>header</p>
      {renderRoutes(routes)}
      <p>footer</p>
    </div>
  )
})
