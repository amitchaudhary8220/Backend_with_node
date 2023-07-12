require("dotenv").config();
const express = require("express");
const connectDB = require("./db/connect");
const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler");
const PORT = process.env.PORT || 3000;
const productRoute = require("./routes/products");

const app = express();

//routers
// app.get("/", (req, res) => {
//   res.send("<h1>Home page</h1>");
// });

app.use("/api/v1/products", productRoute);
app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(PORT, () => {
      console.log(`App is running at port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
