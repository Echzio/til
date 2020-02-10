import { setError, changeAuth } from '@/store/reducers/auth';

export const validateAuth = ({ name, password, currentLogin, currentPassword, unlogin = false }) => {
  return dispatch => {
    if (!unlogin) {
      dispatch(setError(''))

      if (name !== currentLogin) {
        dispatch(setError('error name'))
        return
      }

      if (password !== currentPassword) {
        dispatch(setError('error password'))
        return
      }

      dispatch(changeAuth(true))
    } else {
      dispatch(changeAuth(false))
    }
  }
}