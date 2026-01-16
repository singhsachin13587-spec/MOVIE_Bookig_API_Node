const Movie = require("../models/movie.model");
const movieService = require('../services/movie.service');

const errorResponseBody = {
  err: {},
  data: {},
  message: "Something went wrong, cannot process the data",
  success: false
};

const successResponseBody = {
  err: {},
  data: {},
  message: "Successfully fetch the movie details",
  success: true
};

const createMovie = async (req, res) => {
  try {
    console.log("HEADERS 👉", req.headers);
    console.log("BODY 👉", req.body);

    const movie = await Movie.create(req.body);

    return res.status(201).json({
      success: true,
      error: {},
      data: movie,
      message: "Successfully created a new movie"
    });

  } catch (err) {
    console.error("CREATE MOVIE ERROR 👉", err.message);

    return res.status(500).json({
      success: false,
      error: err.message,
      data: {},
      message: "Something went wrong"
    });
  }
};

const deleteMovie = async (req, res) => {
  try {
    const response = await Movie.deleteOne({
      _id: req.params.Id  
    });

    return res.status(201).json({
      success: true,
      error: {},
      message: "Succesfully deleted the movie",
      data: response
    });

  } catch (err) {
    console.error("DELETE MOVIE ERROR 👉", err.message);

    return res.status(500).json({
      success: false,
      error: err.message,
      data: {},
      message: "Something went wrong"
    });
  }
};

const getMovies = async (req, res) => {
  try {
    const response = await movieService.getMovieById(req.params.Id); // ✅ kept same

    successResponseBody.data = response;

    return res.status(200).json({
      success: true,
      error: {},
      data: response,          // ✅ fixed
      message: "Successfully fetch the movie details"
    });

  } catch (err) {
    console.error("FETCH DATA MOVIE ERROR 👉", err.message);

    return res.status(500).json(errorResponseBody);
  }
};

module.exports = {
  createMovie,
  deleteMovie,
  getMovies     // ✅ fixed export
};
