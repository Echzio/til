import React, { useEffect } from 'react'
import { hot } from 'react-hot-loader/root';

import { renderRoutes } from 'react-router-config'
import { routes } from '@/router/'

import { useDispatch } from 'react-redux'

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'HELLO', payload: 'sagas worked' })
  }, [])

  return (
    <div>
      <p>header</p>
      {renderRoutes(routes)}
      <p>footer</p>
    </div>
  )
}

export default hot(App)