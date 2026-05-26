import { configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products";
import cartReducer from "./cart";

//~ setup for local storage in redux
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const realStorage = storage.default || storage;

//~ config cart storage
const persistConfig = {
  key: "cart",
  storage: realStorage,
};

//~ make cart reducer e.i. middle man reducer
const persistedCartReducer = persistReducer(persistConfig, cartReducer);

const shopeEaseStore = configureStore({
  reducer: {
    products: productsReducer,
    cart: persistedCartReducer, //~ use this reducer
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(shopeEaseStore);

export default shopeEaseStore;
