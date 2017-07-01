var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ArticleSchema = new Schema({
  title: {
  	type: String,
  	required: true,
  	unique: true
  },
  link: {
  	type: String,
  	required: true,
  	unique: true
  },
  scrapedDate :{
    type: Date,
    default: Date.now()
  },
  saved: {
    type: Boolean,
    default: false
  },
  comment: {
  	type: Schema.Types.ObjectId,
  	ref: "Comment"
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;