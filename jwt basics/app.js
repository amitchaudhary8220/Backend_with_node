require("dotenv").config();
require("express-async-errors");   //it help to catch the error without using try and catch and wrapper async function , where will be calling the next(error) for invoking the error middleware


const express = require("express");
const mainRoute = require("./routes/main");
const app = express();

const notFoundMiddleware = require("./middleware/not-found");
const errorHandlerMiddleware = require("./middleware/error-handler"); 

// middleware
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1", mainRoute);

app.use(notFoundMiddleware);
app.use(errorHandlerMiddleware);

const port = process.env.PORT || 3000;

const start = async () => {
  try {
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
