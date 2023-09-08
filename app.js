const express = require("express");
const mongoose = require("mongoose");
// const { MongoClient } = require("mongodb");s
const app = express();

mongoose.connect(
  "mongodb+srv://udayvarshnaycs20:rootpass@cluster0.frrtqwm.mongodb.net/",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

// middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

// routes
app.use(require("./routes/index"));
app.use(require("./routes/todo"));

// server configurations....
app.listen(3000, () => console.log("Server started listening on port: 3000"));
