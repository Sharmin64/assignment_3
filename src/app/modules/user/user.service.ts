/* eslint-disable @typescript-eslint/no-explicit-any */
// import catchAsync from "../../utils/catchAsync";

import config from "../../config";
import { IUser, PartialUser } from "./user.interface";
import { User } from "./user.model";
import jwt from "jsonwebtoken";

const signupUserInDB = async (data: IUser) => {
  const result = await User.create(data);
  return result;
};

const passwordCompare = async (
  password: string,
  hashedPassword: string
): Promise<boolean> => {
  const isMatch = User.comparePassword(password, hashedPassword);
  return isMatch;
};

const tokenProvider = async (data: PartialUser): Promise<string> => {
  const payload = { ...data };
  // const secretKey = "ro8BS6Hiivgzy8Xuu09JDjlNLnSLldY5";
  const secretKey = config.jwt_access_secret;

  const token = jwt.sign(payload, secretKey as string, {
    expiresIn: "7d",
  });

  return token;
};

const findUserByEmail = async (email: string): Promise<IUser | null> => {
  const userExist = await User.findOne({ email });
  return userExist;
};

export const UserServices = {
  signupUserInDB,
  passwordCompare,
  tokenProvider,
  findUserByEmail,
};
