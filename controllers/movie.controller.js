const Movie = require("../models/movie.model");
const movieService = require("../services/movie.service"); // ✅ REQUIRED
const {
  successResponseBody,
  errorResponseBody
} = require("../utils/responsebody");




const createMovie = async (req, res) => {
  try {
    const response = await movieService.createMovie(req.body);

    if (response?.err) {
      return res.status(response.code || 400).json({
        success: false,
        error: response.err,
        message: "Validation failed on few parameters of the request body"
      });
    }

    return res.status(201).json({
      success: true,
      error: {},
      data: response,
      message: "Successfully created a new movie"
    });

  } catch (err) {
    console.error("CREATE MOVIE ERROR 👉", err.message);
    return res.status(500).json({
      success: false,
      error: err,
      message: "Internal server error"
    });
  }
};

/**
 * DELETE MOVIE
 */
const deleteMovie = async (req, res) => {
  try {
    const movieId = req.params.id.trim(); // 🔥 FIX

    const response = await movieService.deleteMovie(movieId);

    return res.status(200).json({
      success: true,
      error: {},
      message: "Successfully deleted the movie",
      data: response
    });

  } catch (err) {
    console.error("DELETE MOVIE ERROR 👉", err.message);
    return res.status(500).json({
      success: false,
      error: err,
      message: "Internal server error"
    });
  }
};

/**
 * GET MOVIE BY ID
 */
const getMovies = async (req, res) => {
  try {
    const movieId = req.params.id.trim(); // 🔥 FIX

    const response = await movieService.getMovieById(movieId);

    return res.status(200).json({
      success: true,
      error: {},
      data: response,
      message: "Successfully fetched the movie details"
    });

  } catch (err) {
    console.error("FETCH MOVIE ERROR 👉", err.message);
    return res.status(500).json({
      success: false,
      error: err,
      message: "Internal server error"
    });
  }
};

/**
 * UPDATE MOVIE
 */
const updateMovie = async (req, res) => {
  try {
    const movieId = req.params.id.trim(); // 🔥 FIX

    const response = await movieService.updateMovie(
      movieId,
      req.body
    );

    if (response?.err) {
      return res.status(response.code || 404).json({
        success: false,
        error: response.err,
        message: response.err
      });
    }

    return res.status(200).json({
      success: true,
      error: {},
      data: response,
      message: "Successfully updated the movie"
    });

  } catch (err) {
    console.error("UPDATE MOVIE ERROR 👉", err.message);
    return res.status(500).json({
      success: false,
      error: err,
      message: "Internal server error"
    });
  }
};

module.exports = {
  createMovie,
  deleteMovie,
  getMovies,
  updateMovie
};
