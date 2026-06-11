import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "products",
  initialState: {
    products: [],
    selectedProduct: null,
    search: "",
    sort: "",
    filter: "",
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
    },

    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
    setFilter: (state, action) => {
      state.filter = action.payload;
    },
    clearFilter: (state) => {
      state.filter = "";
    },
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
  },
});

export default productSlice.reducer;

export const productsAction = productSlice.actions;
