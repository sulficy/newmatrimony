//reviewSchema.js
const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema(
  {
    rating: {
      type: Number,
      required: true,
      min: 1,
      max: 5,
    },
    message: {
      type: String,
      required: true,
      maxlength: 500,
    },
    userId: { type: String, },
  });

module.exports = mongoose.model('Review', reviewSchema);


