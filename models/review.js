const mongoose = require('mongoose');
const config = require('../config/database');

//Article schema
const ReviewSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    required: true
  }
});

const Review = module.exports = mongoose.model('Review', ReviewSchema);

module.exports.getReviewById = function(id, callback) {
  Review.findById(id, callback);
}

