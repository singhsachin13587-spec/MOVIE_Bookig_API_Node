const Movie = require('../models/movie.model');

const getMovieById = async (id) => {
  const movie = await Movie.findById(id);
console.log("movie found",movie);

  if (!movie) {
    return {
      err: "No movie found for the corresponding id provided",
      code: 404
    };
  }

  return movie;
};

module.exports = {
  getMovieById
};
