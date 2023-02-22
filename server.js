const mongoose = require("mongoose");
const express = require("express");
const app = express();

mongoose.connect("", () => {
  console.log("Connected");
});
const User = require("./models/user.js");
const Post = require("./models/posts.js");
const comments = require("./models/comments.js");

app.use(express.json());

app.post("/", (req, res) => {
  const user = Post.create(req.body);
  res.json(user);
});
//To Get the All the output using populate

app.get("/a", async (req, res) => {
  const a = await Post.find({}).populate({
    //Multiple Populate methods -Nested
    path: "reviews",
    populate: { path: "userid" },
  });
  console.log(a[0].reviews);
  res.json({ a: a.data });
});

/*

 {
    _id: new ObjectId("63f5d0db4e08d1bfbff47b31"),
    userid: {
      _id: new ObjectId("63f5c3b767910e5bb92317e0"),
      name: 'Ash',
      age: 17,
      email: 'ashv',
      __v: 0
    },
    body: 'hello',
    __v: 0
  }

*/

app.post("/add/:postID", (req, res) => {
  const postID = req.params.postID;
  const userid = req.body.id || "63f5c3b767910e5bb92317e0";
  // comments.create({ userid, body: "hello" });
  Post.updateOne(
    { _id: postID },
    {
      $push: { reviews: "63f5d0db4e08d1bfbff47b31" },
    }
  ).then((x) => {
    console.log(x);
  });
  res.send("succ");
});
app.listen(3000);
