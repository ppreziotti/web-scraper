// Requiring Models
var Article = require("../models/Article.js");
var Comment = require("../models/Comment.js");
// Scraping tools
var cheerio = require("cheerio");
var request = require("request");

module.exports = function(app) {
  app.get("/", function(req, res) {
    res.render("index");
  });

  app.get("/scrape", function(req, res) {
    request("http://www.npr.org", function(error, response, html) {
    	var $ = cheerio.load(html);
    	var result = {};

    	$("h1.title").each(function(i, element) {
    	  result.title = $(this).text();
    	  result.link = $(element).parent().attr("href");
    	  var entry = new Article(result);
    	  entry.save(function(err, doc) {
    	  	if (err) {
    	  	  console.log(err);
    	  	}
    	  	else {
    	  	  console.log(doc);
    	  	}
    	  });
    	});
    });
    
    Article.find({}, function(error, articles) {
    	if (error) {
    	  res.send(error)
    	}
    	else {
    	  var hbsObject = {
    	  	Article: articles
    	  }
    	  res.render("scrape", hbsObject);
    	}
    });
  });
};