import React, { useMemo, useEffect, useCallback } from 'react';
import { Link, useParams } from 'react-router-dom'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'
import { items } from '@/components/items/static/index'
import { hot } from 'react-hot-loader';
import * as actions from '@/core/actions/index'
import { Items } from '@/components/items/items'

export const Pagination = hot(module)(() => {
  const { page } = useParams();
  const { linksCount, currentPage } = useSelector(({ pagination: { countOnPage, currentPage } }) => {
    return useMemo(() => ({
      currentPage,
      linksCount: Math.ceil(items.length / countOnPage),
    }), [currentPage])
  }, shallowEqual)

  const dispatch = useDispatch();
  const setCurrentPage = useCallback(page => {
    dispatch(actions.setCurrentPage(page))
  }, [dispatch])

  useEffect(() => {
    !!page && setCurrentPage(page)
  }, [page])


  return (
    <>
      <Items />
      <div style={{ display: 'grid', 'gridTemplateColumns': "repeat(12, min-content)", 'columnGap': '15px' }}>
        {Array(linksCount).fill(1).map((_, index) => {
          return <Link style={currentPage === (index + 1) ? { color: 'red' } : {}} to={{ pathname: `/pagination/${index + 1}` }} key={index}>{index + 1}</Link>
        })}
      </div >
    </>
  )
})