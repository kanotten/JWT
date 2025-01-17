import jwt from "jsonwebtoken";
import express from "express";
import cors from "cors";

const PORT = 3000;

const app = express();

const users = [
  {
    username: "kenshe",
    password: "holyludvig",
  },
  {
    username: "baloo",
    password: "maribo",
  },
];

// Middleware to parse JSON body
app.use(express.json());

app.get("/", (req, res) => {
  res.send("hello maan again");
});

app.post("/login", (req, res) => {
  const { username, password } = req.body;

  for (const user of users) {
    if (user.username === username && user.password === password) {
      return true;
    }
  }

  return false;
});

app.listen(PORT, () => {
  console.log("server started");
});
