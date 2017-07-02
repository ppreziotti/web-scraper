// Requiring Models
var Article = require("../models/Article.js");
var Comment = require("../models/Comment.js");

module.exports = function(app) {
  app.get("/api/articles", function(req, res) {
    Article.find({}, function(error, articles) {
      if (error) {
      	res.send(error);
      }
      else {
        res.send(articles);
      }
    });
  });

  app.get("/api/articles/:title", function(req, res) {
  	Article.find({title: req.params.title}, function(error, article) {
  	  if (error) {
  	  	res.send(error);
  	  }
  	  else {
  	  	res.send(article)
  	  }
  	})
  })

  // Put route for updating saved status of article -- need to complete
  app.put("/api/articles/:title", function(req, res) {
  	Article.findOneAndUpdate({title: req.params.title}, {$set: {saved: true}}, function(error) {
	  if (error) {
	  	res.send(error);
	  }
	  else {
	  	res.send("Article saved successfully!");
	  }	
  	});
  });

  app.delete("/api/articles/:title", function(req, res) {
  	Article.remove({title: req.params.title}, function(error) {
  	  if (error) {
  	  	res.send(error);
  	  }
  	  else {
  	  	res.send("Article deleted!");
  	  }
  	});
  });
};