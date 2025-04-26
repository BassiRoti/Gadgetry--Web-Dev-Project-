import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
    },
    decreaseQuantity(state, action) {
      const index = state.cartItems.findIndex(item => item._id === action.payload);
      if (index !== -1) {
        state.cartItems.splice(index, 1); // remove 1 item (not full remove, just quantity -1)
      }
    },
    increaseQuantity(state, action) {
      state.cartItems.push(action.payload); // simply push one more item
    }
  }
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
