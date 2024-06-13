import { Booking } from "./booking.model";

const getAllBookingsFromDB = async () => {};
const getSingleBookingFromDB = async (id: string) => {
  // const result = await Booking.findOne({ id })
  //   .populate('admissionSemister')
  //   .populate({
  //     path: 'academicDepartment',
  //     populate: {
  //       path: 'academicFaculty',
  //     },
  //   });
  // return result;
};

export const BookingServices = {
  getAllBookingsFromDB,
  getSingleBookingFromDB,
};
