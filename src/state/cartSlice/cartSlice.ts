import { createSlice } from "@reduxjs/toolkit"
import Cart from "../../components/Cart/Cart"

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
    incrementQuantity: (state, action: { payload: number }) => {
      const id = action.payload
      const item = state.cart.find((item) => item.id === id)
      if (item) {
        item.quantity++
        state.sum += item.price
      }
    },
    decrementQuantity: (state, action: { payload: number }) => {
      const id = action.payload
      const item = state.cart.find((item) => item.id === id)
      if (item && item.quantity > 1) {
        item.quantity--
        state.sum -= item.price
      }
    },
    removeItem: (state, action: { payload: number }) => {
      const id = action.payload
      const item = state.cart.find((item) => item.id === id)
      if (item) {
        state.sum -= item.price * item.quantity
        state.cart.splice(state.cart.indexOf(item), 1)
      }
    },
  },
})

export const { addToCart, incrementQuantity, decrementQuantity, removeItem } =
  cartSlice.actions

export default cartSlice.reducer
