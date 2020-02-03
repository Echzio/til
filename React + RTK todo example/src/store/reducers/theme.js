import { createSlice } from '@reduxjs/toolkit'

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    name: 'day'
  },
  reducers: {
    turnTheme: (state, action) => ({
      ...state,
      name: action.payload,
    })
  }
})

export const { turnTheme } = themeSlice.actions

export default themeSlice.reducer