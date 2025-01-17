import jwt from "jsonwebtoken";
import express from "express";
import cors from "cors";

const PORT = 3000;

const app = express();

app.get("/", (req, res) => {
  res.send("hello maan again");
});

app.listen(PORT, () => {
  console.log("server started");
});
