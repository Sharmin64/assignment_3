// import httpStatus from "http-status";
// import AppError from "../errors/AppError";
// import { User } from "../modules/user/user.model";
// import catchAsync from "../utils/catchAsync";

// const isAuthenticate = (roles: string[]) => {
//   return catchAsync(async (req, res, next) => {
//     const userDecoded = await req?.userInfo;
//     const userEmail = await req?.userInfo?.email;

//     const userExist: any | null = await User.findOne({ email: userEmail });

//     // check user exist or not

//     if (!userExist) {
//       return next(new AppError(httpStatus.NOT_FOUND, "User not found"));
//     }

//     const userRole = await userExist?.role;

//     if (!userRole || !roles.includes(userRole)) {
//       return next(new AppError(httpStatus.UNAUTHORIZED, "User not authorized"));
//     }

//     req.userInfo = userDecoded;
//     (req as any).userId = userExist?._id;
//     next();
//   });
// };

// export default isAuthenticate;
