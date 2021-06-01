/* eslint-disable prettier/prettier */
import { USER_LOGGEDIN, USER_LOGGEDOUT } from "./actionTypes";

export function userLoggedIn(user) {
  return {
    type: USER_LOGGEDIN,
    payload: user,
  };
}

export function userLoggedOut() {
  return {
    type: USER_LOGGEDOUT,
  };
}
