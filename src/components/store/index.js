import { configureStore } from "@reduxjs/toolkit";
import productsReducer from "./products";
import cartReducer from "./cart";

const shopeEaseStore = configureStore({
  reducer: {
    products: productsReducer,
    cart: cartReducer,
  },
});

export default shopeEaseStore;
