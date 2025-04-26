import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[],
    fetched:false
}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers: {
      setProducts:(state, action)=>{
        state.products = action.payload;
        state.fetched=true;
      },
      addProduct:(state, action)=>{
        state.products.push(action.payload); 
        // state.fetched=false;
      },
      removestock:(state,action)=>{
        const {quantity}=action.payload;
        state.products.stock-=quantity;
      },
      reduceStock:(state, action)=> {
        const { productId, quantity } = action.payload;
        const product = state.products.find((p) => p._id === productId);
        if (product) {
          product.stock = Math.max(0, product.stock - quantity);
        }
      },
      increaseStock(state, action) {
        const { productId, quantity } = action.payload;
        const product = state.products.find((p) => p._id === productId);
        if (product) {
          product.stock += quantity; // Increase stock when items are removed from the cart
        }
      },
    },
  });


export const { setProducts, addProduct,removestock, reduceStock } = productSlice.actions;

export default productSlice.reducer;