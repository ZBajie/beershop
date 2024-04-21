import { configureStore } from "@reduxjs/toolkit"
import beersReducer from "./beerSlice/beerSlice"
import cartSliceReducer from "./cartSlice/cartSlice"

export const store = configureStore({
  reducer: {
    beers: beersReducer,
    cart: cartSliceReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
