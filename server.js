require("dotenv").config();

const express = require("express");
const app = express();
const cors = require("cors");
const jwt = require("jsonwebtoken");
const { getNodeText } = require("@testing-library/dom");

app.use(express.json());
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;
const REFRESH_TOKEN_SECRET = process.env.REFRESH_TOKEN_SECRET;

const posts = [
  { username: "Michael", title: "Post 1" },
  { username: "Manny", title: "Post 2" },
];

app.get("/posts", authenticateToken, cors(), (req, res) => {
  res.json(posts.filter((post) => post.username === req.user.name));
});

app.post("/login", (req, res) => {
  // First Authenticate. We are already doing that with Asure
  // So here we authorize with JWT

  const username = req.body.username;
  const user = { name: username };
  const accessToken = jwt.sign(user, ACCESS_TOKEN_SECRET);
  res.json({ accessToken });
});

const authenticateToken = (req, res, next) => {
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  if (token === null) return res.sendStatus(401);

  jwt.verify(token, ACCESS_TOKEN_SECRET, (err, user) => {
    if (err) return res.sendStatus(403);
    req.user = user;
    next();
  });
};

app.listen(3344, () =>
  console.log(`Server running on http://localhost:${3344}`)
);
