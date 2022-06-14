if (process.env.NODE_ENV === "development") {
  const host = "localhost";
  const user = "root";
  const password = process.env.DB_PASSWORD;
  const database = "enddate";
  const speed = 1000000;

  module.exports = {
    // host: 'localhost',
    host: host,
    user: user,
    password: password,
    database: database,
    speed: speed,
  };
}
if (process.env.NODE_ENV === "production") {

  module.exports = {
    host: process.env.HOST,
    user: process.env.USERNAME,
    password: process.env.PASSWORD,
    database: process.env.DB,
    speed: 1000000,
    port: 3306
  };
}
// if(['production', 'staging'].indexOf(process.env.NODE_ENV) >= 0) {
// })
