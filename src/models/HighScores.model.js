const sql = require("../services/db");
const HighScores = function (table) {
    this.table=table
};
HighScores.copyTable = (result) => {
  sql.query(
   `INSERT INTO highScores SELECT * FROM user`,
    (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }
          result(null, res);
    }
  );
};

HighScores.dropTable = (result) => {
    sql.query(
      `TRUNCATE highScores`,
      (err, res) => {
          if (err) {
              console.log("error: ", err);
              result(null, err);
              return;
            }
            result(null, res);
      }
    );
  };



  HighScores.getAll = (highScores, result) => {
    let query = "SELECT * FROM highScores";
    if (highScores) {
      query += ` WHERE highScores LIKE '%${highScores}%'`;
    }
    sql.query(query, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(null, err);
        return;
      }
      // console.log("users: ", res);
      result(null, res);
    });
  };
  module.exports = HighScores;
