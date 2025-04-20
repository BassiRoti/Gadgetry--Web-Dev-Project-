import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../CartSlice/index';

export const store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});
