// import { ErrorRequestHandler } from "express";
// import AppError from "./AppError";
// import httpStatus from "http-status";

// const mongooseErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
//   if (err.name === "CastError") {
//     err = new AppError(`Invalid ${err.path}: ${err.value}`, 400);
//   }

//   if (err.name === "ValidationError") {
//     const errors = Object.values(err.errors).map((error: any) => ({
//       message: error.message,
//       path: error.path,
//     }));
//     err = new AppError(httpStatus.,"validation error");
//     console.log(errors);
//   }

//   if (err.code === 11000) {
//     const field = Object.keys(err.keyValue)[0];
//     const value = err.keyValue[field];
//     const message = `Duplicate field value: ${field} (${value}). Please use another value!`;
//     err = new AppError( httpStatus.NOT_FOUND,message);
//   }
//   next(err);
// };
// export default mongooseErrorHandler;
