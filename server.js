// Dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
// Scraping tools
var cheerio = require("cheerio");
var request = require("request");
// Setting Mongoose to leverage built-in JavaScript ES6 Promises
mongoose.Promise = Promise;
// Requiring Models
var Article = require("./models/Article.js");
var Comment = require("./models/Comment.js");

// Initialize express
var app = express();
var PORT = 3000;

// Setting up body parser
app.use(bodyParser.urlencoded({
  extended: false
}));

// Making the public directory static
app.use(express.static("public"));

// Establishing Mongoose database connection
mongoose.connect("mongodb://localhost/scraper");
var db = mongoose.connection;

// Logging any Mongoose errors
db.on("error", function(error) {
  console.log("Mongoose error: ", error);
});

// Logging success message once the databse is opened through Mongoose
db.once("open", function() {
  console.log("Mongoose connection successful.");
});

// Listen on port 3000
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});