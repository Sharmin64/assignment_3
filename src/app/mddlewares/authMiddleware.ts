/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import AppError from "../errors/AppError";
import catchAsync from "../utils/catchAsync";
import config from "../config";
import jwt from "jsonwebtoken";

export const authMiddleware = catchAsync(async (req, res, next) => {
  const authHeader = req.headers.authorization as string | undefined;
  if (!authHeader || !authHeader.startsWith("Bearer")) {
    return next(
      new AppError(httpStatus.UNAUTHORIZED, "You have no access to this route")
    );
  }

  const secretKey = config.jwt_access_secret;
  const token = authHeader.split(" ")[1];

  if (!token) {
    return next(
      new AppError(httpStatus.UNAUTHORIZED, "You have no access to this route")
    );
  }
  const decoded = jwt.verify(token, secretKey as string);
  (req as any).decoded = decoded;
  next();
});
