const mongoose = require("mongoose");

// Mongoose user Schema
const userSchema = new mongoose.Schema({
  userName: String,
  firstName: String,
  lastName: String,
  email: String,
  password: String,
  city: String,
  country: String,
  postalCode: String,
});

// Mongoose user Model
const User = mongoose.model("User", userSchema);
module.exports = User;
