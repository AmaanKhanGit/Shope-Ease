import { configureStore } from "@reduxjs/toolkit";
import productSlice from "./products";

const shopeEaseStore = configureStore([
  {
    reducer: {
      products: productSlice.reducer,
    },
  },
]);
