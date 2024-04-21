import { createSlice } from "@reduxjs/toolkit"

import beers from "../../assets/beers.json"

type Beer = {
  id: number
  name: string
  alcohol: number
  volume: number
  price: number
  image: string
}
type BeersState = {
  beers: Beer[]
}

const initialState: BeersState = {
  beers: beers as Beer[],
}

const beersSlice = createSlice({
  name: "beers",
  initialState,
  reducers: {},
})

export const { reducer: beersReducer } = beersSlice

export default beersSlice.reducer
