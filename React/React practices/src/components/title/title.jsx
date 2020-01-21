import React, { useCallback, useMemo } from 'react';
import { hot } from 'react-hot-loader'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'
import * as actions from '../../core/actions/index'

export const Title = hot(module)(() => {
  const { title } = useSelector(({ window1: { title } }) => ({ title }), shallowEqual);
  const memoTitle = useMemo(() => title, [title])

  const dispatch = useDispatch();
  const changeTitle = useCallback(e => {
    dispatch(actions.setTitle(e.target.value))
  }, [dispatch])

  return (
    <>
      {console.log('rerender title')}
      <input type="text" value={memoTitle} onChange={changeTitle} />
      <p>{memoTitle}</p>
    </>
  )
})