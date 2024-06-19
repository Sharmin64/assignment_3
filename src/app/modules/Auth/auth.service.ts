/* eslint-disable @typescript-eslint/no-explicit-any */
import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";
import { USER_ROLE } from "../user/user.constant";

const signUp = async (payload: TUser): Promise<any> => {
  const user = await User.findOne({ email: payload.email });
  console.log(user);

  if (user) {
    throw new AppError(httpStatus.CONFLICT, "User already exists");
  }

  // set the user role
  payload.role = USER_ROLE.USER;
};

export const AuthServices = {
  signUp,
};
