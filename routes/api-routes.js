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

  // Post route for adding a comment to an article
  app.post("/api/articles/:title", function(req, res) {
  	var newComment = new Comment(req.body);

  	newComment.save(function(error, doc) {
  	  if (error) {
  	    console.log(error)
  	  }
  	  else {
  	  	Article.findOneAndUpdate({title: req.params.title}, {comment: req.body.data})
  	  	.exec(function(err, doc) {
  	  	  if (err) {
  	  	  	console.log(err);
  	  	  }
  	  	  else {
  	  	  	res.send(doc);
  	  	  }
  	  	});
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