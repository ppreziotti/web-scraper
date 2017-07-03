// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");

// Setting Mongoose to leverage built-in JavaScript ES6 Promises
mongoose.Promise = Promise;

// Initialize express
var app = express();
var PORT = process.env.PORT || 3000;
var uriString = process.env.MONGODB_URI || "mongodb://localhost/scraper";

// Setting up body parser
app.use(bodyParser.urlencoded({
  extended: false
}));

// Making the public directory static
app.use(express.static("public"));

mongoose.connect(uriString);
var db = mongoose.connection;
// Logging any Mongoose errors
db.on("error", function(error) {
  console.log("Mongoose error: ", error);
});
// Logging success message once the databse is opened through Mongoose
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Set up handlebars, use main.handlebars as the default html layout, and establish handlebars as
// the default templating engine
app.engine("handlebars", exphbs({ defaultLayout: "main"}));
app.set("view engine", "handlebars");

// Import routes and give the server access to them.
require("./routes/api-routes.js")(app);
require("./routes/html-routes.js")(app);

// Listen on port 3000
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});