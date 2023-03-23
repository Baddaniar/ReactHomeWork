import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { IProducts } from "../types";

interface IInitState{
    products: IProducts[]
}

const initialState = {
    products: []
}  as IInitState;

const cartSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    addProductToCart: (state, action) => {
      state.products.push({...action.payload, id: state.products.length + Math.random()});
    },
    deleteProductFromCart: (state, action: PayloadAction<number>) => {
        state.products = state.products.filter((product) => product.id !== action.payload)
    }
  },
});

export const { addProductToCart, deleteProductFromCart} = cartSlice.actions;
export default cartSlice.reducer;
