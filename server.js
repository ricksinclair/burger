//
let express = require("express");
let bodyParser = require("body-parser");
let methodOverride = require("method-override");
let exphbs = require("express-handlebars");
let app = express();
//Allows to run on localhost and Heroku
let PORT = process.env.PORT || 3000;
let routes = require("./controllers/routes.js");

app.use(express.static(__dirname + "/public"));

app.use(bodyParser.urlencoded({ extended: false }));

app.use(methodOverride("_method"));
app.engine(
  "handlebars",
  exphbs({
    defaultLayout: "main"
  })
);

app.set("view engine", "handlebars");
app.listen(PORT);
app.use("/", routes);
