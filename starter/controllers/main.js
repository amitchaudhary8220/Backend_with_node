require("dotenv").config();
const {BadRequestError} = require("../errors/");
const jwt = require("jsonwebtoken");

const login = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password)
    throw new BadRequestError("Please provide username or password");
  const id = new Date().toISOString();
  const token = jwt.sign({ id, username }, process.env.JWT_SECRET, {
    expiresIn: 30,
  });
  res.status(200).json({ msg: "user created ", token });
};

const dashboard = (req, res) => {
  console.log("user is ", req.user);
  const { username, id } = req.user;
  const luckyNumber = Math.floor(Math.random() * 100);
  res.status(200).json({
    msg: `hello ${username}`,
    secret: `here is your authorized data, your lucky number is ${luckyNumber}`,
  });
};

module.exports = {
  login,
  dashboard,
};
