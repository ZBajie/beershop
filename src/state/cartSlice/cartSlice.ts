import { createSlice } from "@reduxjs/toolkit"

type Cart = {
  id: number
  name: string
  price: number
  quantity: number
}

type CartState = {
  cart: Cart[]
  sum: number
}

const initialState: CartState = {
  cart: [],
  sum: 0,
}

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action: { payload: Cart }) => {
      const { id, name, price, quantity } = action.payload
      const existingItem = state.cart.find((item) => item.id === id)
      if (existingItem) {
        existingItem.quantity++
      } else {
        state.cart.push({ id, name, price, quantity })
      }
      state.sum += price
    },
  },
})

export const { addToCart } = cartSlice.actions

export default cartSlice.reducer
