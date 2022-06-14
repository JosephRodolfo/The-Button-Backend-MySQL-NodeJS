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
    // host: 'localhost',
    host: process.ENV.HOST,
    user: process.ENV.USERNAME,
    password: process.ENV.PASSWORD,
    database: process.ENV.DB,
    speed: 1000000,
    port: 3306
  };
}
// if(['production', 'staging'].indexOf(process.env.NODE_ENV) >= 0) {
// })
