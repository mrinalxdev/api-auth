const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/users");
const errHandler = require("./middlewares/errHandler");
const app = express();

require("dotenv").config();

const password = process.env.PASSWORD;
const username = process.env.USERNAME;

//Middlewares
app.use(express.json());

mongoose
  .connect(
    `mongodb+srv://${username}:${password}@cluster0.eu3h9ef.mongodb.net/`
  )
  .then(() => console.log("Db connected successfully"))
  .catch((e) => console.log(e));

//Routes
app.use("/", router);

app.use(errHandler);

const PORT = 8000;

app.listen(PORT, console.log(`Server is running`));
