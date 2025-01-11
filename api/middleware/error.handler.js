//Create an error condition
export const errorHandler = (statusCode, message) => {
  const error = new Error(); // create an error instance
  error.statusCode = statusCode; // set the status code
  error.message = message; // set the error message
  return error;
};

export const useMiddleware = (app) => {
  app.use((error, request, response, next) => {
    const statusCode = error.statusCode || 500; // get error status code and if dont exist 500
    const message = error.message || "Server error occured"; // get error message and if dont exist alt message
    response.status(statusCode).json({
      success: false,
      statusCode,
      message,
    });
  });
};
