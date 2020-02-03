import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';

export const themeWrapper = Component => {
  const Wrapper = (...props) => {
    const { name } = useSelector(({ theme: { name } }) => ({ name }), shallowEqual);

    return <Component {...props} themeName={name} />
  }
  Wrapper.displayName = 'ThemeWrapperHOC'

  return Wrapper
}

