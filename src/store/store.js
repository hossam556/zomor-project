import { configureStore } from '@reduxjs/toolkit'
import home from './reducers/home'

export const store = configureStore({
  reducer: {
    home,
  },
})