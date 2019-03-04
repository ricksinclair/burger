let orm = require("../config/orm.js");

let burger = {
  selectAll: function(cb) {
    orm.selectAll("burgers", function(res) {
      cb(res);
    });
  },
  update: function(id, cb) {
    orm.update("burgers", id, cb);
  },
  create: function(name, cb) {
    orm.create("burgers", name, cb);
  }
};

module.exports = burger;
