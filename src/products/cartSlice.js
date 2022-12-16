import { createSlice } from '@reduxjs/toolkit'

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    countItems: 10,
  },
  reducers: {
    addToCart: (state) => {
      state.countItems += 1
    },

    removeFromCart: (state) => {
      state.countItems -= 1
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToCart, removeFromCart } = cartSlice.actions

export default cartSlice.reducer