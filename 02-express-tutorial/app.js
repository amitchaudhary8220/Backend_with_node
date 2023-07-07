const express = require("express");
const peopleRouter = require("./final/router/people.js");
const authRouter = require("./final/router/auth.js");

const app = express();

app.use(express.static("./methods-public"));

//use this middleware to access data from traditional form

app.use(express.urlencoded({ extended: false }));

//to accept incomeing json data , use express.json() middleware

app.use(express.json());

app.use("/api/people", peopleRouter);
app.use("/login", authRouter);

//routes for postman

// app.get("/api/postman/people", (req, res) => {
//   res.status(200).json({ status: true, data: people });
// });

// app.post("/api/postman/people", (req, res) => {
//   const { name } = req.body;
//   console.log("name of post", name);

//   if (!name) {
//     return res.status(400).send("Please enter the name ");
//   }
//   return res.status(200).json({ status: true, name: name });
// });

// app.get("/", (req, res) => {
//   return res.status(200).send("<h1>home page</h1>");
// });

app.listen(5000);
