const { NEWDATE, NEWDECIMAL } = require("mysql/lib/protocol/constants/types");
const sql = require("../services/db");
const User = function (information) {
  this.ethereum_address = information.address;
  this.score = information.score;
};

User.create = (newUser, result) => {
  const sqlQuery = `INSERT INTO user (score, ethereum_address) 
                      VALUES (${newUser.score}, "${newUser.ethereum_address}") 
                      `;

  sql.query(sqlQuery, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    console.log("created end date: ", { id: res.insertId, ...newUser });
    result(null, { id: res.insertId, ...newUser });
  });
};

User.getAll = (user, result) => {
  let query = "SELECT * FROM user";
  if (user) {
    query += ` WHERE user LIKE '%${user}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    console.log("users: ", res);
    result(null, res);
  });
};

module.exports = User;
