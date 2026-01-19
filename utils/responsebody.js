
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

module.exports = {
   successResponseBody,
   errorResponseBody
}