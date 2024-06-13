// /* eslint-disable @typescript-eslint/no-explicit-any */

import { Request, Response } from "express";
import catchAsync from "../../utils/catchAsync";

// import catchAsync from "../../utils/catchAsync";

const getSingleUser = catchAsync(async (req: Request, res: Response) => {
  res.send("thank you for getting user");
});

const getAllUsers = catchAsync(async (req: Request, res: Response) => {
  res.send("we got all users");
});

export const UserController = {
  getAllUsers,
  getSingleUser,
};
