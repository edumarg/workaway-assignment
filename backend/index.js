var express = require("express");
var cors = require("cors");
var app = express();

app.use(cors());

app.get("/api/test", (req, res) => {
  res.send("hello world");
});

app.listen(9000, () => console.log("listening on port 9000..."));
