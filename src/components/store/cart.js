import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const isExist = state.find((item) => item.id == action.payload.id);
      if (!isExist) {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter((product) => product.id != action.payload.id);
    },
    increaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);

      if (item) {
        item.quantity += 1;
      }
    },
    decreaseQuantity: (state, action) => {
      const item = state.find((item) => item.id === action.payload);
      if (item && item.quantity > 1) {
        item.quantity -= 1;
      }
    },
  },
});

export default cartSlice.reducer;

export const cartAction = cartSlice.actions;
