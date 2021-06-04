const mongoose = require("mongoose");
const config = require("config");

//change hardcode db link by config.get("db")

module.exports = function() {
  const db = config.get("db");
  mongoose.set("useFindAndModify", false);
  mongoose
    .connect(db, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => console.log("Connected to MongoDB..."))
    .catch((error) => console.error("Could not connect to MongoDB", error));
};
