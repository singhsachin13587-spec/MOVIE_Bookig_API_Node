const Movie = require("../models/movie.model");
const movieService = require('../services/movie.service');
const {successResponseBody, errorResponseBody} =require('../utils/responsebody')


const createMovie = async (req, res) => {
  try {
    console.log("HEADERS 👉", req.headers);
    console.log("BODY 👉", req.body);

    const movie = await movieService.createMovie(req.body);

    return res.status(201).json({
      success: true,
      error: {},
      data: movie,
      message: "Successfully created a new movie"
    });

  } catch (err) {
    console.error("CREATE MOVIE ERROR 👉", err.message);

    return res.status(500).json(errorResponseBody);
  }
};




const deleteMovie = async (req, res) => {
  try {
    const response = await movieService.deleteMovie({
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

    return res.status(500).json(errorResponseBody);
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
