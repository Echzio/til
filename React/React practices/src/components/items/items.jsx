import React from 'react'
import { useSelector, shallowEqual } from 'react-redux'
import { hot } from 'react-hot-loader'
import { items } from './static/index'
import { useQuery } from '../../core/hooks/hooks';

const mappedItems = items.map(({ _, name }, index) => ({
  id: index,
  name
}));

export const Items = hot(module)(() => {
  const { page } = useQuery();
  const { itemsSlice } = useSelector(({ pagination: { countOnPage } }) => {
    return {
      itemsSlice: mappedItems.slice((page - 1) * countOnPage, page * countOnPage)
    }
  }, shallowEqual);


  return (
    <>
      {console.log('rerender items')}
      {itemsSlice.map(item => {
        return <p key={item.id}>{`${item.name} ${item.id}`}</p>
      })}
    </>
  )
})