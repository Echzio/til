import React, { useMemo, useCallback } from 'react';
import { useLocation } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

export const useQuery = () => {
  const search = useLocation().search;

  return useMemo(() => {
    return search
      .slice(1)
      .split('&')
      .reduce((acc, query) => {
        const [name, value] = query.split('=');
        acc = {
          ...acc,
          [name]: value,
        };
        return acc;
      }, {});
  }, [search]);
};

export const useActions = actions => {
  const dispatch = useDispatch();
  return useMemo(() => {
    return actions.map(action => bindActionCreators(action, dispatch));
  }, [dispatch, ...actions]);
};
