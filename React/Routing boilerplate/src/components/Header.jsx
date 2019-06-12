import React from 'react'
import { NavLink } from 'react-router-dom'


const Header = () => {
  return (
    <>
      <h1 className="header">Header</h1>
      <nav>
      <p><NavLink exact to='/'>Home</NavLink></p>
      <p><NavLink to='/first'>First Page</NavLink></p>
      <p><NavLink to='/second'>Second Page</NavLink></p>
      </nav>
    </>
  )
}

export default Header