const mysql = require("mysql2");
require("dotenv").config();
const db = mysql.createConnection({
    host: "localhost",
    user: process.env.USER,
    password: process.env.PASSWORD,
    database: "election"
});

module.exports = db;