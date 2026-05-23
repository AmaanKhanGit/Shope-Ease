import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: [],
  reducers: {
    addInitialProducts: (state, action) => {
      return action.payload;
    },
  },
});

export default productSlice.reducer;

export const productsAction = productSlice.actions;
