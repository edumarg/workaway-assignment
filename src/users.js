/* eslint-disable no-undef */
const users = [
  {
    userName: "edumarg",
    email: "edumarg@email.com",
    password: "Abc123",
    firstName: "Edu",
    lastName: "Marg",
    city: "Tlv",
    country: "Israel",
    postalCode: "11111"
  },
  {
    userName: "harry",
    email: "harry@email.com",
    password: "Def456",
    firstName: "harry",
    lastName: "P",
    city: "London",
    country: "England",
    postalCode: "2222"
  },
  {
    userName: "mickey",
    email: "mickey@email.com",
    password: "Xyz789",
    firstName: "mickey",
    lastName: "M",
    city: "Orlandp",
    country: "USA",
    postalCode: "333"
  }
];

export const registerUser = newUser => {
  for (let i = 0; i < users.length; i++) {
    if (newUser.userName === users[i].userName) {
      console.log("user name already exists");
      return;
    }
    if (newUser.email === users[i].email) {
      console.log("email already register");
      return;
    }
  }
  users.push(newUser);
  return newUser;
};

export const getUser = myUser => {
  for (let i = 0; i < users.length; i++) {
    if (
      myUser.userName === users[i].userName &&
      myUser.password === users[i].password
    )
      return users[i];
  }
};
