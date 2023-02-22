const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  reviews: [{ type: mongoose.Schema.Types.ObjectId, ref: "comments" }],
});
const Post = mongoose.model("Post", userSchema);

module.exports = Post;
