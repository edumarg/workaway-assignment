/* eslint-disable prettier/prettier */
/* eslint-disable no-const-assign */
import configureStore from "./configureStore";
import { userLoggedIn, userLoggedOut } from "./actions";

const store = configureStore();

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
