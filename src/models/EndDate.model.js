
const sql = require("../services/db");
const EndDate = function(datedata) {

    this.datedata = datedata
  };
  

EndDate.findById = (id, result) => {
    sql.query(`SELECT * FROM dates WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        console.log("found endDate: ", res[0]);
        result(null, res[0]);
        return;
      }
      // not found Tutorial with the id
      result({ kind: "not_found" }, null);
    });
  };

  module.exports =  EndDate
  
  