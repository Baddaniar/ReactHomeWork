import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./Slices/productSlice";
import cartSlice from "./Slices/cartSlice";

export const store = configureStore({
    reducer:{
        products: productSlice,
        cartProducts: cartSlice
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch