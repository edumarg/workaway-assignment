const mongoose = require("mongoose");

// Mongoose user Schema
const userSchema = new mongoose.Schema({
  userName: { type: String, unique: true, minLength: 3, maxLength: 50 },
  firstName: { type: String, minLength: 3, maxLength: 50 },
  lastName: { type: String, minLength: 3, maxLength: 50 },
  email: { type: String, unique: true, minLength: 3, maxLength: 150 },
  password: { type: String, maxLength: 255 },
  city: { type: String, minLength: 3, maxLength: 50 },
  country: { type: String, minLength: 3, maxLength: 50 },
  postalCode: { type: String, minLength: 3, maxLength: 50 },
});

// Mongoose user Model
const User = mongoose.model("User", userSchema);
module.exports = User;
