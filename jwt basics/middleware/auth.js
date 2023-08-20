require("dotenv").config();
const { UnathunticatedError } = require("../errors/");
const jwt = require("jsonwebtoken");

const authMiddleware = async (req, res, next) => {
  const authtoken = req.headers.authorization;
  if (!authtoken || !authtoken.startsWith("Bearer "))
    throw new UnathunticatedError("No token found ");

  const token = authtoken.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // console.log("docoder ", decoded);
    req.user = { username: decoded.username, id: decoded.id };
    next();
  } catch (error) {
    throw new UnathunticatedError("You are not allowed to access it ");
  }
};

module.exports = authMiddleware;
