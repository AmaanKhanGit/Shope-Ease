import { combineReducers, configureStore } from "@reduxjs/toolkit";

import productsReducer from "./products";
import cartReducer from "./cart";
import wishlistReducer from "./wishlist";
import userReducer from "./user";

//~ setup for local storage in redux
import { persistStore, persistReducer } from "redux-persist";

import storage from "redux-persist/lib/storage";

const realStorage = storage.default || storage;

//~ config cart storage
const rootPersistConfig = {
  key: "root",
  storage: realStorage,
  whitelist: ["cart", "wishlist", "user"], // only persist these slices
};

const rootReducer = combineReducers({
  products: productsReducer,
  cart: cartReducer,
  wishlist: wishlistReducer,
  user: userReducer,
});

const persistedReducer = persistReducer(rootPersistConfig, rootReducer);

const shopeEaseStore = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export const persistor = persistStore(shopeEaseStore);

export default shopeEaseStore;
