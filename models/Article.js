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
  saved: {
    type: Boolean,
    default: false
  },
  note: {
  	type: Schema.Types.ObjectId,
  	ref: "Article"
  }
});

var Article = mongoose.model("Article", ArticleSchema);
module.exports = Article;