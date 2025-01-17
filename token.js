import jwt from "jsonwebtoken";

const SECRET = "thisWillBeOurSecretToken"; // Example secret key
const user = { name: "ola" }; // Example user object

const myToken = jwt.sign(user, SECRET);
console.log("Generated Token:", myToken);
