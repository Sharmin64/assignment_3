// import { USER_ROLE } from "./user.constant";

// export type TUser = {
//   name: string;
//   email: string;
//   password: string;
//   phone: string;
//   role: keyof typeof USER_ROLE;
//   address: string;
// };

// ?test
import { Document, Model } from "mongoose";

// export interface IUser extends Document {
//   name: string;
//   email: string;
//   password: string;
//   phone: string;
//   role: "admin" | "user";
//   address: string;
// }

export interface IUser extends Document {
  name: string;
  email: string;
  password: string;
  phone: string;
  role: "admin" | "user";
  address: string;
}

export interface UserModel extends Model<IUser> {
  comparePassword(plainPassword: string, hashedPassword: string): boolean;
}

export interface DecodedToken {
  user: string;
  iat: number;
  exp: number;
}
export type PartialUser = Partial<IUser>;
