require("dotenv").config();

const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const morgan = require("morgan");
const { connectDB } = require("./config/db");

connectDB();

app.use(morgan(':method | :status | :url | :response-time | :date[iso] | :remote-addr | from :referrer | :user-agent'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.use("/", require("./Routes"));

app.listen(process.env.SERVER_PORT, function() {
  console.log(`Running on port ${process.env.SERVER_PORT}`);
});
