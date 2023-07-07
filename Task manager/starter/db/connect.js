const mongoose = require("mongoose");

const connectDB = (url) => {
  return mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    writeConcern: { w: "majority" },
  });
};

module.exports = connectDB;
