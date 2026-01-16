const MovieController = require('../controllers/movie.controller');
const movieMiddlewares = require('../middlewares/movie.middlewares');

const routes = (app) => {

  app.post(
    '/mba/api/v1/movies',
    movieMiddlewares.validateMovieCreateRequest,
    MovieController.createMovie
  );

  app.delete(
    '/mba/api/v1/movies/:Id',
    MovieController.deleteMovie
  );

  app.get(
    '/mba/api/v1/movies/:Id',
    MovieController.getMovies
  );
};

module.exports = routes;
