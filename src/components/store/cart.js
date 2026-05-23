import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      state.push(action.payload);
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id != action.payload.id);
    },
  },
});

export default cartSlice.reducer;

export const cartAction = cartSlice.actions;
