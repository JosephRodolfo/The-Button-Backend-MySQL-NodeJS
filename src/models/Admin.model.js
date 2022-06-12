const sql = require("../services/db");

const Admin = function (data) {
  this.email = data.email;
  this.password = data.password;
};

Admin.findByEmail = async (email) => {
  return new Promise((resolve, reject) => {
    sql.query(
      "SELECT * FROM administration WHERE email = ?",
      [email],
      (err, res) => {
        if (err) {
          return reject(error);
        }
        return resolve(res[0]);
      }
    );
  });
};

Admin.createAdmin = (newAdmin, result) => {
  sql.query(
    "INSERT INTO administration (email, password) VALUES (?, ?)",
    [newAdmin.email, newAdmin.password],
    (err, res) => {
      if (err) {
        console.log("error: ", err);
        result(err, null);
        return;
      }
      result(null, { id: res.insertId, ...newAdmin });
    }
  );
};

module.exports = Admin;
