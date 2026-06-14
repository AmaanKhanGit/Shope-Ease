import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    token: "",
    user: null,
    isAuthenticated: false,
    isRegustered: false,
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
    editProfile: (state, action) => {
      state.user = { ...state.user, ...action.payload };
    },
  },
});

export default userSlice.reducer;

export const userAction = userSlice.actions;
