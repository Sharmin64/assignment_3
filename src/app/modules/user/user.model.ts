import { Schema, model } from "mongoose";

import bcrypt from "bcrypt";
import { IUser, UserModel } from "./user.interface";

// const userSchema = new Schema<TUser, UserModel>(
//   {
//     name: {
//       type: String,
//       required: [true, "name must be required"],
//     },
//     email: {
//       type: String,
//       required: [true, "email must be required and unique"],
//       unique: true,
//     },
//     password: {
//       type: String,
//       required: [true, "password must be required"],
//     },
//     phone: {
//       type: String,
//       required: [true, "phone must be required"],
//       max: 15,
//     },
//     role: {
//       type: String,
//       enum: ["admin", "user"],
//       required: [true, "role must be required"],
//     },
//     address: {
//       type: String,
//       required: [true, "address must be required"],
//       max: 100,
//       min: 10,
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

const userSchema: Schema<IUser, UserModel> = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name must be required"],
    },
    email: {
      type: String,
      required: [true, "Email must be required and unique"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Password must be required"],
    },
    phone: {
      type: String,
      required: [true, "Phone must be required"],
    },
    role: {
      type: String,
      enum: ["admin", "user"],
      required: [true, "Role must be required"],
    },
    address: {
      type: String,
      required: [true, "Address must be required"],
    },
  },
  {
    timestamps: true,
  }
);

// Create the Mongoose model based on the schema
// const User: Model<TUser> = model<TUser>('User', userSchema);

// user mongoose middleware
userSchema.pre("save", async function (next) {
  try {
    this.password = await bcrypt.hash(this.password, 11);
    next();
  } catch (error) {
    next(error as Error);
  }
});

// user mongoose methods
userSchema.static(
  "comparePassword",
  function comparePassword(plainPassword, hashedPassword) {
    return bcrypt.compare(plainPassword, hashedPassword);
  }
);

// Create and export the Mongoose model
export const User = model<IUser, UserModel>("User", userSchema);
