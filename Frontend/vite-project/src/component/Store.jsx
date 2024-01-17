import { configureStore } from '@reduxjs/toolkit'
import cartReducer from './Slices/Addcart'
import userReducer from './Slices/User'

export const store = configureStore({
  reducer: {
    add:cartReducer,
    users:userReducer
  },
})