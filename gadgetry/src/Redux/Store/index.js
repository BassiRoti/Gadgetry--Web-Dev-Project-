import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../CartSlice/index';
import productReducer from '../ProductSlice/index'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product:productReducer
  },
});
