import winston from 'winston';

export const createError = (status, statusCode, message) => {
  let error = new Error(message);
  error.status = status;
  error.statusCode = statusCode;
  return error;
}

/**
 * The standard error handler for all routes in this API
 * @param res
 * @returns {function(*=)}
 */
export const errorResponse = (res) => {
  return error => {
    winston.debug(error);
    res.status(error.statusCode || 500)
      .json(error);
  };
}