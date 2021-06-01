/* eslint-disable prettier/prettier */
/* eslint-disable no-const-assign */
import store from "./store";
import { userLoggedIn, userLoggedOut } from "./actions";

let currentUser = {
  userName: "edumarg",
  email: "edumarg@email.com",
  password: "Abc123",
  firstName: "Edu",
  lastName: "Marg",
  city: "Tlv",
  country: "Israel",
  postalCode: "11111",
};

delete currentUser.password;
console.log(currentUser);

store.subscribe(() => {
  console.log("Store Changes", store.getState());
});

store.dispatch(userLoggedIn(currentUser));

store.dispatch(userLoggedOut());
