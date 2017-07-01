// Requiring Models
var Article = require("../models/Article.js");
var Comment = require("../models/Comment.js");

module.exports = function(app) {
  app.get("/api/articles", function(req, res) {
    Article.find({}, function(articles) {
      res.json(articles);
    });
  });
};