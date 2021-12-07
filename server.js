const express = require("express");
const app = express();
const cors = require("cors");

const posts = [
  { username: "Michael", title: "Post 1" },
  { username: "Manny", title: "Post 2" },
];

app.get("/posts", cors(), (req, res) => {
  res.json(posts);
});

app.listen(3344, () =>
  console.log(`Server running on http://localhost:${3344}`)
);
