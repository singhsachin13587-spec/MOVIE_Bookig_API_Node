const Movie = require('../models/movie.model');

const createMovie = async (data) => {
  try {
    const movie = await Movie.create(data);
    return movie;

  } catch (error) {
    if (error.name === 'ValidationError') {
      let err = {};

      Object.keys(error.errors).forEach((key) => {
        err[key] = error.errors[key].message;
      });

      return { err, code: 422 };
    }

    throw error;
  }
};

const deleteMovie = async (id) => {
  return await Movie.findByIdAndDelete(id);
};

const getMovieById = async (id) => {
  const movie = await Movie.findById(id);

  if (!movie) {
    return {
      err: "No movie found for the corresponding id provided",
      code: 404
    };
  }

  return movie;
};

const updateMovie = async (id, data) => {
  const movie = await Movie.findByIdAndUpdate(
    id,
    { $set: data },
    { new: true, runValidators: true } // 🔥 REQUIRED
  );

  if (!movie) {
    return {
      err: "No movie found for the corresponding id provided",
      code: 404
    };
  }

  return movie;
};

module.exports = {
  createMovie,
  deleteMovie,
  getMovieById,
  updateMovie // ✅ EXPORT FIXED
};
