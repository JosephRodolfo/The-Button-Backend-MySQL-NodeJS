const sql = require("../services/db");
const Configuration = function (configuration) {
    this.speed = configuration.speed
    this.callFrequency = configuration.callFrequency
  };

  Configuration.findById = (id, result) => {
    sql.query(`SELECT * FROM configuration WHERE id = ${id}`, (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      if (res.length) {
        result(null, res[0]);
        return;
      }
      result({ kind: "not_found" }, null);
    });
  };

  Configuration.updateById = (id, configuration, result) => {
    sql.query(
      "UPDATE configuration SET speed = ?, callFrequency = ? WHERE id = ?",
      [configuration.speed, configuration.callFrequency, id],
      (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }
        if (res.affectedRows == 0) {
          result({ kind: "not_found" }, null);
          return;
        }
        console.log("updated configuration: ", { id: id, ...configuration });
        result(null, { id: id, ...configuration });
      }
    );
  };

  module.exports =  Configuration 