import { configureStore } from '@reduxjs/toolkit'
import { campersReducer } from '../slice/slice'

export const store = configureStore({
  reducer: {
    campers: campersReducer
  }
})
