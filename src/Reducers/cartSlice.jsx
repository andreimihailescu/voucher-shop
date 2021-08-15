import { createSlice } from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    vouchers: [],
  },
  reducers: {
    addVoucherToCart: (state, action) => {
      console.log(action);
      state.vouchers.push({
        voucherId: action.payload.id,
        amount: action.payload.amount,
      })
    }
  },
})

// Action creators are generated for each case reducer function
export const { addVoucherToCart } = cartSlice.actions

export default cartSlice.reducer