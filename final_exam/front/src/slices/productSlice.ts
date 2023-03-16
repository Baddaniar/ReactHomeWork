import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {IProducts } from "../types";


export const fetchProducts = createAsyncThunk("fetchProducts", 
    async () => {
        const res = await fetch('http://localhost:8080/products')
        const data = res.json()
        return data
    }
)

let initialState = [] as IProducts[];



const productSlice = createSlice({
  name: "products",
  initialState,
  reducers: {
    clearState(){
        return initialState
    }
  },
  extraReducers(builder) {
      builder.addCase(fetchProducts.fulfilled, (state, action) => {
        return [...action.payload]
      })
  },
});

export const {clearState} = productSlice.actions

export default productSlice.reducer
