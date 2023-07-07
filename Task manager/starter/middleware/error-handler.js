const errorHandler = (err, req, res, next) => {
  console.log("ERROR HANDLER --------><>>>>>>", err);
  res.status(400).json({ msg: `error is ${err}` });
};

module.exports = errorHandler;
