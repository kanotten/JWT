import jwt from "jsonwebtoken";

const SECRET = "ahhh";
const token = jwt.sign(
  {
    email: "kenji@hotmail.com",
    username: "kenji",
    avatar: "example.com/image.png",
  },
  SECRET,
);

console.log(token);
