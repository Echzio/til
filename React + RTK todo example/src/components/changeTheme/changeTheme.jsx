import React, { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { turnTheme } from '@/store/reducers/theme';

export const ChangeTheme = () => {

  const dispatch = useDispatch();

  const changeTheme = useCallback(theme => {
    dispatch(turnTheme(theme))
  }, [dispatch])

  return (
    <div className="theme-changers">
      <button onClick={() => changeTheme('day')}>change day</button>
      <button onClick={() => changeTheme('night')}>change night</button>
    </div>
  )
}