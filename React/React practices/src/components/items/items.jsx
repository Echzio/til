import React, { useMemo } from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { hot } from 'react-hot-loader'
import { items } from './static/index'

const mappedItems = items.map(({ _, name }, index) => ({
  id: index,
  name
}));

export const Items = hot(module)(() => {
  const { currentPage, countOnPage } = useSelector(({ pagination: { currentPage, countOnPage } }) => ({ currentPage, countOnPage }), shallowEqual);

  const memoSlicedItems = useMemo(() => {
    return mappedItems.slice((currentPage - 1) * countOnPage, currentPage * countOnPage)
  }, [currentPage])

  return (
    <>
      {console.log('rerender items')}
      {memoSlicedItems.map(item => {
        return <p key={item.id}>{`${item.name} ${item.id}`}</p>
      })}
    </>
  )
})