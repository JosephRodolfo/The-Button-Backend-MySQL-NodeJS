const express = require("express");
const app = express();
const enddateRouter = require('./routes/enddate')
// const connection = require('./services/db')






// const connection = mysql.createConnection(config.db);
// connection.connect((err) => {
//   if (err) throw err;
//   console.log('Connected!');
// });

// connection.query('SELECT * FROM dates', (err,rows) => {
//   if(err) throw err;

//   console.log('Data received from Db:');
//   console.log(rows);
// });



app.use(enddateRouter)
app.use(express.json());





module.exports = {
  app,
  }


