import { createSlice } from "@reduxjs/toolkit"; // import create slice
import SignIn from "./../../pages/SignIn";

// create initial state for the current user, error and loading
const initialState = {
  currentUser: null,
  error: null,
  loading: false,
};

// create the user slice and set the reducers

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    defaultSignIn: (state) => {
      state.error = null;
      state.loading = false;
    },
    successSignIn: (state, action) => {
      (state.currentUser = action.payload), // user data = payload
        (state.error = null);
      state.loading = false;
    },
    failSignIn: (state, action) => {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { defaultSignIn, successSignIn, failSignIn } = userSlice.actions; // export reducer functions

export default userSlice.reducer; // export the reducer
