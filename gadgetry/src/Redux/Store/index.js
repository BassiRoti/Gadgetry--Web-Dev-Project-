import { configureStore } from '@reduxjs/toolkit';
import cartReducer from '../CartSlice/index';
import loginReducer from '../LoginSlice/index'

export const store = configureStore({
  reducer: {
    cart: cartReducer,
    login:loginReducer
  },
});
