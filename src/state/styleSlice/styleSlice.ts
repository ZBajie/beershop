import { createSlice } from "@reduxjs/toolkit"

type StyleType = {
  styleValue: number
}

const initialState: StyleType = {
  styleValue: 0,
}

const styleSlice = createSlice({
  name: "style",
  initialState,
  reducers: {
    increment: (state) => {
      if (state.styleValue < 3) {
        state.styleValue++
      }
    },
    decrement: (state) => {
      if (state.styleValue > 0) {
        state.styleValue--
      }
    },
  },
})
export const { increment, decrement } = styleSlice.actions
export default styleSlice.reducer
