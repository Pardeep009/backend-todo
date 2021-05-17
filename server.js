if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const expressValidator = require("express-validator");
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const cors = require("cors");

mongoose
  .connect("mongodb://mongo:27017/TodoApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => console.log("DB Connected..."))
  .catch(error => console.log("DB Connectioin error", error));

// Middleware
app.use(morgan("dev")); // logger for terminal
app.use(express.json()); // to read the data
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(cookieParser());
app.use(expressValidator());

app.use("/", require("./Routes/user"));

const PORT = 3000

app.listen(PORT, function() {
  console.log(`Running on port ${PORT}`);
});
