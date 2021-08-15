import { createSlice } from '@reduxjs/toolkit';
import useVouchersService from "../Services/useVouchersService";

export const vouchersSlice = createSlice({
    name: 'vouchers',
    initialState: {
      list: useVouchersService(),
    },
    reducers: {
      increment: (state) => {
        // Redux Toolkit allows us to write "mutating" logic in reducers. It
        // doesn't actually mutate the state because it uses the Immer library,
        // which detects changes to a "draft state" and produces a brand new
        // immutable state based off those changes
        state.vouchers += 1
      },
      decrement: (state) => {
        state.vouchers -= 1
      },
      incrementByAmount: (state, action) => {
        state.vouchers += action.payload
      },
    },
  })
  
  // Action creators are generated for each case reducer function
  export const { increment, decrement, incrementByAmount } = vouchersSlice.actions
  
  export default vouchersSlice.reducer