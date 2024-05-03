const express = require("express");
const mongoose = require("mongoose");
const app = express();

mongoose
  .connect(`mongodb+srv://mrinalbitsat:CnnFuTFZcnCon59O@cluster0.eu3h9ef.mongodb.net/`)
  .then(() => console.log("Db connected successfully"))
  .catch((e) => console.log(e));


  //Routes
  app.use('/', router);
const PORT = 8000;

app.listen(PORT, console.log(`Server is running`));
