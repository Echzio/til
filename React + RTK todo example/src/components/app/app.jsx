import React from 'react';
import { hot } from 'react-hot-loader/root';
import { Router } from '@/components/router/router'

const App = () => {
  return (
    <div className="app">
      <Router />
    </div>
  )
}

export default hot(App)
