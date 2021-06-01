/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions
export const userLoggedIn = createAction("userLoggedIn");
export const userLoggedOut = createAction("userLoggedOut");

// Reducer
export default createReducer([], {
  userLoggedIn: (state, action) => {
    state.push({ currentUser: action.payload });
  },
  userLoggedOut: (state, action) => [],
});
