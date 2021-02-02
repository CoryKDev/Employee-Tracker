require('dotenv').config();
const util = require("util");
const mysql = require("mysql");
const inquirer = require("inquirer");
const { connected } = require("process");

const connection = mysql.createConnection({
    host: "localhost",
    user: "DB_PASS",
    password: "password",
    database: "employeesDB"
});

connection.connect((err) => {
    if(err) throw err;
    console.log("Connected as id "+ connection.threadId);
});

connection.query = util.promisify(connection.query);

module.exports = connection;