const MovieController = require('../controllers/movie.controller');
const movieMiddlewares = require('../middlewares/movie.middlewares');

const routes = (app) => {

  app.post(
    '/mba/api/v1/movies',
    movieMiddlewares.validateMovieCreateRequest,
    MovieController.createMovie
  );

  app.delete(
    '/mba/api/v1/movies/:id',   // ✅ lowercase id
    MovieController.deleteMovie
  );

  app.get(
    '/mba/api/v1/movies/:id',   // ✅ lowercase id
    MovieController.getMovies
  );

  app.put(
    '/mba/api/v1/movies/:id',   // ✅ lowercase id
    MovieController.updateMovie // ✅ FIXED
  );
};

module.exports = routes;
