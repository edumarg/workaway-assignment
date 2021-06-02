const express = require("express");
const app = express();

const User = require("./userModel");

app.post("/api/login", async (req, res) => {
  const { userName, password } = req.body;
  let user = await User.findOne({ userName: userName, password: password });
  if (!user) {
    return res.status(400).send("Invalid username or password.");
  }
  res.send(user);
});

app.post("/api/register", async (req, res) => {
  const body = req.body;

  let user = await User.findOne({ email: body.email });
  if (user) return res.status(400).send("email already registered.");

  user = await User.findOne({ userName: body.userName });
  if (user) return res.status(400).send("user name already registered.");

  const newUser = new User(body);
  console.log("New user to register...");
  const result = await newUser.save();
  console.log("new user registered", result);
  res.send(result);
});

app.post("/api/logout", (req, res) => {
  res.send("logged out...");
});

module.exports = app;
