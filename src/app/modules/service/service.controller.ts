import httpStatus from "http-status";
import AppError from "../../errors/AppError";
import catchAsync from "../../utils/catchAsync";
import { ServicingService } from "./service.service";
import serviceValidationSchema from "./service.validation";
import sendResponse from "../../utils/sendResponse";

const createService = catchAsync(async (req, res, next) => {
  const serviceRawData = await req.body;
  const validateData = await serviceValidationSchema.parseAsync(serviceRawData);
  const result = await ServicingService.createServiceInDB(validateData);
  if (!result) {
    return next(
      new AppError(
        httpStatus.INTERNAL_SERVER_ERROR,
        "service creation unsuccessful"
      )
    );
  }
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Booking Successfull",
    data: result,
  });
});

export const ServiceControllers = {
  createService,
};
