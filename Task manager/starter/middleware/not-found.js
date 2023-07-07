const notFound = (req, res) => {
  res.status(404).send("Url does not exist");
};

module.exports = notFound;
