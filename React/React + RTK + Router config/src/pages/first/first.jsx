import React from 'react'
import { renderRoutes } from 'react-router-config'

export const First = ({ route: { routes } }) => {
  return (
    <>
      <p>first</p>
      {renderRoutes(routes)}
    </>
  )
}