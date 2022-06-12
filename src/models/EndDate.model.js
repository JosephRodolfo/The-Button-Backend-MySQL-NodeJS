const sql = require("../services/db");
const EndDate = function (information) {
  this.datedata = information.datedata;
};

EndDate.findById = (id, result) => {
  sql.query(`SELECT * FROM dates WHERE id = ${id}`, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    if (res.length) {
      // console.log("found endDate: ", res[0]);
      result(null, res[0]);
      return;
    }
    result({ kind: "not_found" }, null);
  });
};

EndDate.findLast = (result) => {
  sql.query(
    `SELECT * FROM dates WHERE id =(SELECT MAX( id) FROM dates);`,
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        // console.log("found endDate: ", res[0]);
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    }
  );
};

EndDate.create = (newDate, result) => {
  sql.query("INSERT INTO dates SET ?", newDate, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(err, null);
      return;
    }
    result(null, { id: res.insertId, ...newDate });

    
  });
};

EndDate.getAll = (date, result) => {
  let query = "SELECT * FROM dates";
  if (date) {
    query += ` WHERE date LIKE '%${date}%'`;
  }
  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    // console.log("end dates: ", res);
    result(null, res);
  });
};

EndDate.deleteAll = (result) => {
  sql.query("TRUNCATE dates", (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }
    result(null, res);
  });
};

module.exports = EndDate;
