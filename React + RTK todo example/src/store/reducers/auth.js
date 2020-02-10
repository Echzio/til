import { createSlice } from '@reduxjs/toolkit'

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    auth: false,
    login: 'user',
    password: '123',
    error: '',
  },
  reducers: {
    changeAuth: (state, action) => ({
      ...state,
      auth: action.payload
    }),
    setError: (state, action) => ({
      ...state,
      error: action.payload,
    })
  }
})

export const { changeAuth, setError } = authSlice.actions

export default authSlice.reducer