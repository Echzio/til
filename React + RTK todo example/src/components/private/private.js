import React from 'react';
import { useSelector } from 'react-redux';
import { useActions } from '@/hooks/index';

import { validateAuth } from '@/store/actions/index';

export const Private = () => {
  const { validateAuth: validateAuthBinded } = useActions([validateAuth])
  const { login, password, error } = useSelector(({ auth: { login, password, error } }) => ({ login, password, error }));

  const checkAuth = e => {
    const { name: { value: nameValue }, password: { value: passwordValue } } = e.target;
    e.preventDefault();
    validateAuthBinded({ name: nameValue, password: passwordValue, currentLogin: login, currentPassword: password })
  }

  return (
    <>
      {error && <p>{error}</p>}
      <form onSubmit={checkAuth}>
        <input name="name" placeholder="enter name" type="text" />
        <input name="password" placeholder="enter password" type="password" />
        <button type="submit">submit</button>
      </form>
    </>
  )
}