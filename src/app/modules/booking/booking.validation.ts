import { z } from "zod";
import mongoose, { Types } from "mongoose";

const bookingValidation = z.object({
  customer: z?.string().refine((value) => {
    return mongoose.Types.ObjectId.isValid(value as string);
  }, "Invalid ObjectId"),
  service: z.string().refine((value) => {
    return mongoose.Types.ObjectId.isValid(value as string);
  }, "Invalid ObjectId"),
  slot: z.string().refine((value) => {
    return mongoose.Types.ObjectId.isValid(value as string);
  }, "Invalid ObjectId"), // Validate against MongoDB ObjectId
  vehicleType: z.enum([
    "car",
    "truck",
    "SUV",
    "van",
    "motorcycle",
    "bus",
    "electricVehicle",
    "hybridVehicle",
    "bicycle",
    "tractor",
  ]),
  vehicleBrand: z.string(),
  vehicleModel: z.string(),
  manufacturingYear: z.string(),
  registrationPlace: z.string(),
});

export default bookingValidation;
