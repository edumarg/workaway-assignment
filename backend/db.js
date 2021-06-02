const mongoose = require("mongoose");

//change hardcode db link by config.get("db")

module.exports = function() {
  mongoose
    .connect("mongodb://localhost:27017/workaway", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((error) => console.error("Could not connect to MongoDB", error));
};
