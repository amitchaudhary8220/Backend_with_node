const express = require("express");

const router = express.Router();

router.post("/", (req, res) => {
  //after adding middleware , event thing will be in req.body

  const { name } = req.body;
  if (name) res.status(200).send(`Welcome ${name}`);

  return res.status(200).send("Please enter name");
});

module.exports = router;
