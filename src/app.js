const express = require("express");
const app = express();
const enddateRouter = require('./routes/endDates')
const userRouter = require('./routes/user')
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:3000"
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(enddateRouter)
app.use(userRouter)



module.exports = {
  app,
  }


