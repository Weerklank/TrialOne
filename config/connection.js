// this will store the connection to mysql data

// This section details the items that are required
var mysql = require('mysql');
var config = require('dotenv');
//require('dotenv').config();
var connection;
require('dotenv').config({path: __dirname + '/../.env'});
console.log(process.env.MYSQLPASSWORD);

// connection to the DB
if (process.env.JAWSDB_URL) {
    console.log("Process.env.jawsdb")
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        port: 3306,
        user: "root",
        password: process.env.MYSQLPASSWORD,
        database: 'moodscape_db'
    });
};

// testing the connection
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    } else {
        console.log("Connected to database")
    }
});

module.exports = connection;