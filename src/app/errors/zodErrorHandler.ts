import { ErrorRequestHandler } from "express";
import { ZodError } from "zod";
import AppError from "./AppError";
import httpStatus from "http-status";

const zodErrorHandler: ErrorRequestHandler = (err, req, res, next) => {
  if (err instanceof ZodError) {
    const message = err.errors.map((error) => error.message).join(". ");
    err = new AppError(httpStatus.NOT_FOUND, message);
  }
  next(err);
};

export default zodErrorHandler;
