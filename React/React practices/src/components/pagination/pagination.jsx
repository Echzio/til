import React, { useMemo, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { items } from '@/components/items/static'
import { hot } from 'react-hot-loader';
import * as actions from '@/core/actions'

export const Pagination = hot(module)(() => {
  const { page } = useParams();
  const { countOnPage, currentPage } = useSelector(({ pagination: { countOnPage, currentPage } }) => ({ countOnPage, currentPage }), shallowEqual)

  const dispatch = useDispatch();
  const setCurrentPage = useCallback(page => {
    dispatch(actions.setCurrentPage(page))
  }, [dispatch])

  useEffect(() => {    
    !!page && setCurrentPage(page)
  }, [page])

  const memoLinksCount = useMemo(() => {
    return Math.ceil(items.length / countOnPage)
  }, [countOnPage])

  const memoCurrentPage = useMemo(() => {
    return currentPage
  }, [currentPage])

  return (
    <>
      {console.log('rerender pagination')}
      <div style={{ display: 'grid', 'gridTemplateColumns': "repeat(12, min-content)", 'columnGap': '15px' }}>
        {Array(memoLinksCount).fill(1).map((_, index) => {
          return <Link style={memoCurrentPage === (index + 1) ? { color: 'red' } : {}} to={{ pathname: `/concat/${index + 1}` }} key={index}>{index + 1}</Link>
        })}
      </div >
    </>
  )
})