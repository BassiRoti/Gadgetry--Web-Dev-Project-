import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../CartSlice/index';
import productReducer from '../ProductSlice/index'
import loginReducer from '../LoginSlice/index'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    product:productReducer,
    login:loginReducer
  },
});
