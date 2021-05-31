/* eslint-disable no-undef */
export const users = [
  {
    userName: "edumarg",
    email: "edumarg@email.com",
    firstName: "Edu",
    lastName: "Marg",
    city: "Tlv",
    country: "Israel",
    postalCode: "11111"
  },
  {
    userName: "harry",
    email: "harry@email.com",
    firstName: "harry",
    lastName: "P",
    city: "London",
    country: "England",
    postalCode: "2222"
  },
  {
    userName: "mickey",
    email: "mickey@email.com",
    firstName: "mickey",
    lastName: "M",
    city: "Orlandp",
    country: "USA",
    postalCode: "333"
  }
];

export const registerUser = newUser => {
  for (user of users) {
    if (newUser.userName === user.userName) {
      console.log("user name already exists");
      return;
    }
    if (newUser.email === user.email) {
      console.log("email already register");
      return;
    }
  }
  users.push(newUser);
};

export const getUser = myUser => {
  for (user of users) {
    if (myUser.userName === user.userName && myUser.password === user.password)
      return user;
  }
};
