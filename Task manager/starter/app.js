const express = require("express");

require("dotenv").config();
const taskRouter = require("./routes/task");
const connectDB = require("./db/connect");
const notFound = require("./middleware/not-found");
const errorHandler = require("./middleware/error-handler");
const port = process.env.PORT || 3000;
const app = express();
app.use(express.static("./public"));
app.use(express.json());

app.use("/api/v1/tasks", taskRouter);
app.use(notFound); // we are using middleware notFound here , so whenever no path matches above , this middleware will run , and since this middleware is returing , any other path which are below it , will not work
app.use(errorHandler); //THIS is error handler middleware (custom error handler ) , but since we are using (err, req,res,next ) which is syntax of default error handler , express will deal with it whenever error will occur, we just need to call next function their

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () => {
      console.log(`app is live at PORT ${port}`);
    });
  } catch (error) {
    console.log(error);
  }
};

start();
