import catchAsync from "../../utils/catchAsync";
import { BookingServices } from "./booking.service";

const createBooking = catchAsync(async (req, res) => {
  //   const result = await AcademicSemisterServices.createAcademicSemisterIntoDB(
  //     req.body,
  //   );
  //   sendResponse(res, {
  //     statusCode: httpStatus.OK,
  //     success: true,
  //     message: 'Academic Semister is created successfully',
  //     data: result,
  //   });
});

const getSingleBooking = catchAsync(async (req, res) => {
  //   const { bookingId } = req.params;
  //   const result =
  //     await AcademicSemisterServices.getSingleAcademicSemesterFromDB(semesterId);
  //   sendResponse(res, {
  //     statusCode: httpStatus.OK,
  //     success: true,
  //     message: 'Academic semester is retrieved succesfully',
  //     data: result,
  //   });
});

const getAllBookings = catchAsync(async (req, res) => {
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
