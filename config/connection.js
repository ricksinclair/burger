let mysql = require("mysql");

let connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "password",
    database: "burgers_db"
  });
}
connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  console.log("Connected as Id: " + connection.threadId);
});

//export module for use in other files
module.exports = connection;
