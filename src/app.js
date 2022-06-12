const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
require("dotenv").config();
const cors = require("cors");
const routes = require("./routes/v1");
const corsOptions = {
  origin: "http://localhost:3000",
  credentials: true
};
app.use(cors(corsOptions));
app.use(cookieParser())
app.use(express.json());
app.use("/v1", routes);



module.exports = {
  app,
};
