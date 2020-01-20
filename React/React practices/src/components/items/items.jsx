import React, { useMemo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { hot } from 'react-hot-loader'
import { items } from './static/index'

export const Items = hot(module)(() => {
  const mappedItems = items.map(({ _, name }, index) => ({
    id: index,
    name
  }));
  const { slicedItems } = useSelector(({ pagination: { currentPage, countOnPage } }) => {
    return useMemo(() => ({
      slicedItems: mappedItems.slice((currentPage - 1) * countOnPage, currentPage * countOnPage)
    }), [currentPage])
  }, shallowEqual)

  return (
    <>
      {slicedItems.map(item => {
        return <p key={item.id}>{`${item.name} ${item.id}`}</p>
      })}
    </>
  )
})