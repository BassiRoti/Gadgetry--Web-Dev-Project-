import { createSlice } from "@reduxjs/toolkit";

const loadCartFromLocalStorage = () => {
  try {
    const cart = localStorage.getItem('cartItems');
    if (cart) {
      return JSON.parse(cart);
    } else {
      return [];
    }
  } catch (error) {
    console.error("Failed to load cart from localStorage:", error);
    return [];
  }
};

const initialState = {
  cartItems: loadCartFromLocalStorage() || []
};

const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      state.cartItems.push(action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    removeFromCart(state, action) {
      state.cartItems = state.cartItems.filter(item => item._id !== action.payload);
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    decreaseQuantity(state, action) {
      const index = state.cartItems.findIndex(item => item._id === action.payload);
      if (index !== -1) {
        state.cartItems.splice(index, 1); 
        localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
      }
    },
    increaseQuantity(state, action) {
      state.cartItems.push(action.payload); 
      localStorage.setItem('cartItems', JSON.stringify(state.cartItems));
    },
    clearCart(state) {
      state.cartItems = [];
      localStorage.removeItem('cartItems');
    }
  }
});

export const { addToCart, removeFromCart, decreaseQuantity, increaseQuantity } = CartSlice.actions;
export default CartSlice.reducer;
