import { configureStore } from "@reduxjs/toolkit"
import beersReducer from "./beerSlice/beerSlice"
import cartSliceReducer from "./cartSlice/cartSlice"
import styleReducer from "./styleSlice/styleSlice"

export const store = configureStore({
  reducer: {
    beers: beersReducer,
    cart: cartSliceReducer,
    style: styleReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
