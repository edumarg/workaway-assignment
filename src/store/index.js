/* eslint-disable prettier/prettier */
/* eslint-disable no-const-assign */
import store from "./store";

const currentUser = {
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

store.subscribe(() => {
  console.log("Store Changes", store.getState());
});

store.dispatch({
  type: "userLoggedin",
  payload: currentUser,
});

console.log(currentUser);

store.dispatch({
  type: "userLooggedout",
});
