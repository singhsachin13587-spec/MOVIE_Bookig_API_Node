// const validateMovieCreateRequest = (req, res, next) => {

//   // Validate movie name
//   if (!req.body.name || req.body.name.trim() === "") {
//     return res.status(400).json({
//       success: false,
//       err: "The name of the movie is not present in the request",
//       data: {},
//       message: "Malformed Request | Bad Request"
//     });
//   }

//   // Validate movie description
//   if (!req.body.description || req.body.description.trim() === "") {
//     return res.status(400).json({
//       success: false,
//       err: "The description of the movie is not present in the request",
//       data: {},
//       message: "Malformed Request | Bad Request"
//     });
//   }

//   next();
// };

// module.exports = {
//   validateMovieCreateRequest
// };

const { STATUS } = require('../utils/constants');

const badRequestResponse = {
    success: false,
    err: "",
    data: {},
    message: "Malformed Request | Bad Request"
};

/**
 * @param req -> HTTP request object
 * @param res -> HTTP response object
 * @param next -> next middleware function
 */
const validateMovieCreateRequest = async (req, res, next) => {

    // validate movie name
    if (!req.body || !req.body.name || req.body.name.trim() === "") {
        return res.status(STATUS.BAD_REQUEST).json({
            ...badRequestResponse,
            err: "The name of the movie is not present in the request"
        });
    }

    // validate movie description
    if (!req.body.description || req.body.description.trim() === "") {
        return res.status(STATUS.BAD_REQUEST).json({
            ...badRequestResponse,
            err: "The description of the movie is not present in the request"
        });
    }

    // validate movie casts
    if (
        !req.body.casts ||
        !Array.isArray(req.body.casts) ||
        req.body.casts.length === 0
    ) {
        return res.status(STATUS.BAD_REQUEST).json({
            ...badRequestResponse,
            err: "The casts of the movie is not present in the request"
        });
    }

    // validate each cast
    for (let cast of req.body.casts) {
        if (typeof cast !== "string" || cast.trim() === "") {
            return res.status(STATUS.BAD_REQUEST).json({
                ...badRequestResponse,
                err: "Each cast must be a non-empty string"
            });
        }
    }

    // validate trailer url
    if (!req.body.trailerUrl || req.body.trailerUrl.trim() === "") {
        return res.status(STATUS.BAD_REQUEST).json({
            ...badRequestResponse,
            err: "The trailerUrl of the movie is not present in the request"
        });
    }

    // validate release date
    if (!req.body.releaseDate) {
        return res.status(STATUS.BAD_REQUEST).json({
            ...badRequestResponse,
            err: "The releaseDate of the movie is not present in the request"
        });
    }

    // validate director
    if (!req.body.director || req.body.director.trim() === "") {
        return res.status(STATUS.BAD_REQUEST).json({
            ...badRequestResponse,
            err: "The director of the movie is not present in the request"
        });
    }

    next();
};

module.exports = {
    validateMovieCreateRequest
};
