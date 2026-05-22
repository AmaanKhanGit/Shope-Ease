import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addInitialProducts: (state, action) => {
      console.log(action.payload);
    },
  },
});

export default productSlice;

export const productsAction = productSlice.actions;
