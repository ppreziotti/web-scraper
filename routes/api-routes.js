// Requiring Models
var Article = require("../models/Article.js");
var Comment = require("../models/Comment.js");

module.exports = function(app) {
  app.get("/api/articles", function(req, res) {
    Article.find({}, function(articles) {
      res.send(articles);
    });
  });

  // Put route for updating saved status of article -- need to complete
  app.put("/api/articles/:title", function(req, res) {
  	Article.findOneAndUpdate({title: req.params.title}, {$set: {saved: true}}, function(error, doc) {
	  if (error) {
	  	console.log(error);
	  }
	  else {
	  	console.log(doc);
	  }	
  	});
  });
};