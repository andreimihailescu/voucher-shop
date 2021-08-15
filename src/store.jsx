import { configureStore } from '@reduxjs/toolkit';
import vouchersReducer from './Reducers/vouchersSlice';
import cartReducer from './Reducers/cartSlice';

export default configureStore({
  reducer: {
    vouchers: vouchersReducer,
    cart: cartReducer
  },
})