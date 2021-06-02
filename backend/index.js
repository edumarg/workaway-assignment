var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());
app.use(express.json());

app.post("/api/login", (req, res) => {
  const user = req.body;
  console.log("user reseived", user);
  if (!user) {
    res.status(404).send("User not found");
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
  res.send("logout");
});

const PORT = process.env.PORT || 9000;
app.listen(PORT, () => console.log(`listening on port ${PORT}...`));
