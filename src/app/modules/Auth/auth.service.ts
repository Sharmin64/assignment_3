/* eslint-disable @typescript-eslint/no-explicit-any */

import { TUser } from "../user/user.interface";
import { User } from "../user/user.model";

const signUp = async (payload: TUser): Promise<any> => {
  const user = await User.create(payload);
  console.log(user);
};
// const signUp = async (payload: TUser): Promise<any> => {
//   const user = await User.find({ email: payload.email });
//   console.log(user);

//   if (user) {
//     throw new AppError(httpStatus.CONFLICT, "User already exists");
//   }

//   // set the user role
//   payload.role = USER_ROLE.USER;
// };

export const AuthServices = {
  signUp,
};
