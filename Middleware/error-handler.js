/**Custom error handler middleware used to display custom json messages on teriminal */

import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: err.message || "something went wrong try again later",
  };

  return res.status(customError.statusCode).json(customError.msg);
};

export default errorHandlerMiddleware;
