const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("config");
const _ = require("lodash");

const app = express();
const User = require("./userModel");

app.post("/api/login", async (req, res) => {
  const { userName, password } = req.body;

  let user = await User.findOne({
    userName: userName,
  });
  if (!user) {
    return res.status(400).send("Invalid username or password.");
  }

  const validPassword = await bcrypt.compare(password, user.password);
  if (!validPassword) return res.status(400).send("Invalid email or password.");
  const { firstName, lastName, email, city, country, postalCode } = user;
  const token = jwt.sign(
    { userName, firstName, lastName, email, city, country, postalCode },
    config.get("jwtPrivateKey")
  );
  res.send(token);
});

app.post("/api/register", async (req, res) => {
  const body = req.body;

  let user = await User.findOne({ email: body.email });
  if (user) return res.status(400).send("email already registered.");

  user = await User.findOne({ userName: body.userName });
  if (user) return res.status(400).send("user name already registered.");

  const newUser = new User(body);
  const salt = await bcrypt.genSalt(10);
  newUser.password = await bcrypt.hash(newUser.password, salt);

  const result = await newUser.save();

  const {
    userName,
    firstName,
    lastName,
    email,
    city,
    country,
    postalCode,
  } = result;

  const token = jwt.sign(
    { userName, firstName, lastName, email, city, country, postalCode },
    config.get("jwtPrivateKey")
  );

  res
    .header("x-auth-token", token)
    .header("access-control-expose-headers", "x-auth-token")
    .send(
      _.pick(result, [
        "userName",
        "firstName",
        "lastName",
        "email",
        "city",
        "country",
        "postalCode",
      ])
    );
});

app.post("/api/logout", (req, res) => {
  res.send("logged out...");
});

module.exports = app;
