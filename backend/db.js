const mongoose = require("mongoose");
const config = require("config");

//change hardcode db link by config.get("db")

module.exports = function() {
  mongoose
    .connect(config.get("db"), {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((error) => console.error("Could not connect to MongoDB", error));
};
