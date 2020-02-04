import React from 'react';
import { Link, useLocation } from 'react-router-dom'
import { useSelector, shallowEqual } from 'react-redux'
import { items } from '@/components/items/static'
import { hot } from 'react-hot-loader';


export const Pagination = hot(module)(() => {
  const { pathname } = useLocation();
  const { linksCount } = useSelector(({ pagination: { countOnPage } }) => {
    return {
      linksCount: Math.ceil(items.length / countOnPage),
    }
  }, shallowEqual)


  return (
    <>
      {console.log('rerender pagination')}
      <div style={{ display: 'grid', 'gridTemplateColumns': "repeat(12, min-content)", 'columnGap': '15px' }}>
        {Array(linksCount).fill(1).map((_, index) => {
          return <Link to={`${pathname}?page=${index + 1}`} key={index}>{index + 1}</Link>
        })}
      </div >
    </>
  )
})