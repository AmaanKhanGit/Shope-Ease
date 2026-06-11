import { createSlice } from "@reduxjs/toolkit";

const wishlistSlice = createSlice({
  name: "wishlist",
  initialState: {
    wishlist: [],
    sort: "",
  },

  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload);
    },
    removeFromWishlist: (state, action) => {
      state.wishlist = state.wishlist.filter(
        (item) => item.id !== action.payload.id,
      );
    },
    clearWishlist: (state) => {
      state.wishlist = [];
    },
    setWishlistSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export default wishlistSlice.reducer;

export const wishlistAction = wishlistSlice.actions;
