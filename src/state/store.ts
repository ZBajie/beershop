import { configureStore } from "@reduxjs/toolkit"
import beersReducer from "./beerSlice/beerSlice"
import cartSliceReducer from "./cartSlice/cartSlice"
import styleReducer from "./styleSlice/styleSlice"
import pokemonReducer from "./pokemonSlice/pokemonSlice"

export const store = configureStore({
  reducer: {
    beers: beersReducer,
    cart: cartSliceReducer,
    style: styleReducer,
    pokemons: pokemonReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
