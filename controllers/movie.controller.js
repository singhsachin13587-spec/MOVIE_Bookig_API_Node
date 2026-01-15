// // const Movie = require("../models/movie.model");

// // /**
// //  * Contollers function to create a new movie
// //  * @returns movie created
// //  */

// // const createMovie = async (req, res) => {
// //   const {}=req.body
// //   try {
// //     const movie = await Movie.create(req.body);
// //     return res.status(201).json({
// //       success: true,
// //       error: {},
// //       data: movie,
// //       Message: "Successfully created a new movie",
// //     });
// //   } catch (err) {
// //     console.log(err);
// //     return res.status(500).json({
// //       success: true,
// //       error: err,
// //       data: {},
// //       Message: "Something went wrong",
// //     });
// //   }
// // };

// // module.exports = {
// //   createMovie,
// // };



// const Movie = require("../models/movie.model");

// const createMovie = async (req, res) => {
//   try {
//     const movie = await Movie.create(req.body);

//     return res.status(201).json({
//       success: true,
//       error: {},
//       data: movie,
//       message: "Successfully created a new movie",
//     });

//   } catch (err) {
//     console.error(err);

//     return res.status(500).json({
//       success: false,
//       error: err.message,
//       data: {},
//       message: "Something went wrong",
//     });
//   }
// };

// module.exports = {
//   createMovie,
// };


const Movie = require("../models/movie.model");

const createMovie = async (req, res) => {
  try {
    // ✅ DEBUG (KEEP THIS UNTIL API WORKS)
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

module.exports = {
  createMovie
};
