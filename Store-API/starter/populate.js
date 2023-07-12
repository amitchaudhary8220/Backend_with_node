require("dotenv").config();
const connectDB = require("./db/connect");
const productModal = require("./models/product");
const data = require("./products.json");

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log("connected");
    await productModal.create(data);
  } catch (error) {
    console.log(error);
  }
};

start();
