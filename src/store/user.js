import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    user: null,
    isAuthenticated: false,
  },
  reducers: {
    login: (state, actions) => {
      state.token = actions.payload.token;
      state.user = actions.payload.user;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.token = "";
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export default userSlice.reducer;

export const userAction = userSlice.actions;
