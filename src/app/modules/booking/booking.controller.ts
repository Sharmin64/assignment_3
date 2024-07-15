import { AnyObject } from "mongoose";
import catchAsync from "../../utils/catchAsync";
import { BookingServices } from "./booking.service";
import { PartialBookings } from "./booking.interface";
import createBookingData from "./utils/createBookingData";
import AppError from "../../errors/AppError";
import httpStatus from "http-status";
import sendResponse from "../../utils/sendResponse";

const createBooking = catchAsync(async (req, res, next) => {
  const rawData = await req.body;
  const userId = (req as AnyObject)?.user?.id;
  const bookingData: PartialBookings = await createBookingData(userId, rawData);
  const result = await BookingServices.createBookingInDB(bookingData);

  if (!result) {
    return next(
      new AppError(httpStatus.BAD_REQUEST, "data created unsuccessful")
    );
  }
  const getBooking = await BookingServices.getBookingFromDB();
  if (!getBooking) {
    return next(new AppError(httpStatus.NOT_FOUND, "No Data Found"));
  }

  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking Successfull",
    data: getBooking,
  });
});

// const getSingleBooking = catchAsync(async (req, res) => {
//   //   const { bookingId } = req.params;
//   //   const result =
//   //     await AcademicSemisterServices.getSingleAcademicSemesterFromDB(semesterId);
//   //   sendResponse(res, {
//   //     statusCode: httpStatus.OK,
//   //     success: true,
//   //     message: 'Academic semester is retrieved succesfully',
//   //     data: result,
//   //   });
// });

const getAllBookings = catchAsync(async (req, res, next) => {
  const result = await BookingServices.getAllBookingsFromDB();

  //   sendResponse(res, {
  //     statusCode: httpStatus.OK,
  //     success: true,
  //     message: 'Academic semesters are retrieved successfully',
  //     data: result,
  //   });
});

const updateBooking = catchAsync(async (req, res) => {
  //   const { semesterId } = req.params;
  //   const result = await AcademicSemisterServices.updateAcademicSemisterIntoDB(
  //     semesterId,
  //     req.body,
  //   );
  //   sendResponse(res, {
  //     statusCode: httpStatus.OK,
  //     success: true,
  //     message: 'Academic semester is retrieved succesfully',
  //     data: result,
  //   });
});

export const AcademicSemisterControllers = {
  createBooking,
  getAllBookings,
  getSingleBooking,
  updateBooking,
};
