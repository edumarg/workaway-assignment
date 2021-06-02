const express = require("express");
const cors = require("cors");

const app = express();

require("./db")();
const User = require("./userModel");

app.use(cors());
app.use(express.json());

app.post("/api/login", async (req, res) => {
  console.log("user reseived", req.body);
  const { userName, password } = req.body;
  let user = await User.findOne({ userName: userName, password: password });
  if (!user) {
    return res.status(400).send("Invalid email or password.");
  }
  res.send(user);
});

app.post("/api/register", (req, res) => {
  console.log("register user");
  const user = req.body;
  console.log("user reseived", user);
  res.send(user);
});

app.post("/api/logout", (req, res) => {
  res.send("logged out...");
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
