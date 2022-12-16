import { configureStore } from '@reduxjs/toolkit'
import cartSlice from './products/cartSlice'

export default configureStore({
  reducer: {
    cart: cartSlice,
  },
})