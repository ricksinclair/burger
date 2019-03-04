let connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
let orm = {
  selectAll: function(tableInput, cb) {
    connection.query("SELECT * FROM " + tableInput + ";", function(
      err,
      result
    ) {
      if (err) throw err;
      cb(result);
    });
  },
  update: function(tableInput, condition, cb) {
    connection.query(
      "UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";",
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  },
  create: function(tableInput, val, cb) {
    connection.query(
      "INSERT INTO " +
        tableInput +
        " (burger_name) VALUES('" +
        val +
        "') SET devoured=false;",
      function(err, result) {
        if (err) throw err;
        cb(result);
      }
    );
  }
};

module.exports = orm;
