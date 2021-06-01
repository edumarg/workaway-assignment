/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { createReducer } from "@reduxjs/toolkit";

export default createReducer([], {
  userLoggedIn: (state, action) => {
    state.push({ currentUser: action.payload });
  },
  userLoggedOut: (state, action) => [],
});
