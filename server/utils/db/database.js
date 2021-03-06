const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  host: process.env.HOST,
  user: process.env.DBUSER,
  password: process.env.PASSWORD,
  database: process.env.DB_NAME,
});

module.exports = connection;
