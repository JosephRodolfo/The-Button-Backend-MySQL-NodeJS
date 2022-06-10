const express = require("express");
const app = express();

const cors = require("cors");
const routes = require("./routes/v1");
const corsOptions = {
  origin: "http://localhost:3000",
};
app.use(express.json());
app.use(cors(corsOptions));
app.use("/v1", routes);



module.exports = {
  app,
};
