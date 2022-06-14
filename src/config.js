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
  const host = process.ENV.CLEARDB_DATABASE_URL;
  const user = process.ENV.USERNAME;
  const password = process.ENV.PASSWORD;
  const database = process.ENV.DB;
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
// if(['production', 'staging'].indexOf(process.env.NODE_ENV) >= 0) {
// })
