import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,

  reducers: {
    addToWishlist: (state, action) => {
      console.log("added to wishlist", action.payload);
      state.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      return state.filter((item) => item.id !== action.payload.id);
    },
    clearWishlist: () => {
      return [];
    },
  },
});

export default wishlistSlice.reducer;

export const wishlistAction = wishlistSlice.actions;
