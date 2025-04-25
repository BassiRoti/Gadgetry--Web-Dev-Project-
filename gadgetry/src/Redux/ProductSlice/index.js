import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[]
}

const productSlice = createSlice({
    name:'product',
    initialState,
    reducers: {
      setProducts:(state, action)=>{
        state.products = action.payload;
      },
      addProduct:(state, action)=>{
        state.products.push(action.payload); 
      },
      removestock:(state,action)=>{
        const {quantity}=action.payload;
        state.products.stock-=quantity;
      }
    },
  });


export const { setProducts, addProduct,removestock } = productSlice.actions;

export default productSlice.reducer;