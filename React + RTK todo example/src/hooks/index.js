import React, { useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from '@reduxjs/toolkit';

export const useActions = (actions, deps = null) => {
  const dispatch = useDispatch();
  return useMemo(() => {
    if (Array.isArray(actions)) {
      return actions.reduce((acc, el) => {
        return {
          ...acc,
          [el.name]: bindActionCreators(el, dispatch)
        }
      }
        , {})
    } else {
      throw new Error('action should be array')
    }
  }, !!deps ? [dispatch, ...deps] : [dispatch])
}
