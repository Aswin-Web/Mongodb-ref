const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  userid: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  body: String,
});
const comments = mongoose.model("comments", userSchema);

module.exports = comments;
