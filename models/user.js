const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  age: { type: Number, min: 1, max: 100 },
  email: {
    type: String,
  },
});
const User = mongoose.model("User", userSchema);

module.exports = User;
