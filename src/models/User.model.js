const sql = require("../services/db");
const User = function (email) {
  this.datedata = email;
};

User.create = (newUser, result) => {
    sql.query("INSERT INTO user SET ?", newUser, (err, res) => {
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
      console.log("end dates: ", res);
      result(null, res);
    });
  };

  module.exports = User;