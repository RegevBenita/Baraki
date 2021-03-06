const mongoose = require('mongoose');
const config = require('../config/database');

//Article schema
const ArticleSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

const Article = module.exports = mongoose.model('Article', ArticleSchema);

module.exports.getArticleById = function(id, callback) {
  Article.findById(id, callback);
}

module.exports.addArticle = function(newArticle, callback) {
  newArticle.save(callback);
}
