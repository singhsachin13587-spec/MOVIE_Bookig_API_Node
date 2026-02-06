
const mongoose = require('mongoose');

const movieSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2
  },
  description: {
    type: String,
    required: true,
    minlength: 5
  },
  casts: {
    type: [String],
    required: true
  },
  director: {
    type: String,
    required: true
  },
  trailerUrl: {
    type: String,
    required: true
  },
  language: {
    type: String,
    default: "English"
  },
  releaseDate: {
    type: String,
    required: true
  },
  releaseStatus: {
    type: String,
    enum: ["RELEASED", "UNRELEASED"],
    default: "RELEASED"
  },
  poster: {
    type: String,
    required: true
  }
}, { timestamps: true });

module.exports = mongoose.model('Movie', movieSchema);
