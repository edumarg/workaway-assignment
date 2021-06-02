import { createAction, createReducer } from "@reduxjs/toolkit";

// Actions
export const userLoggedIn = createAction("userLoggedIn");
export const userLoggedOut = createAction("userLoggedOut");

// Reducer
export default createReducer([{ currentUser: {} }], {
  userLoggedIn: (state, action) => {
    state[0] = { currentUser: action.payload };
  },
  userLoggedOut: (state, action) => [{ currentUser: {} }],
});
