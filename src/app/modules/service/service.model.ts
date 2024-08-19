import { Schema, model } from "mongoose";
import { IService } from "./service.interface";

const serviceSchema = new Schema<IService>(
  {
    name: { type: String, required: [true, "name must be needed"] },
    description: {
      type: String,
      required: [true, "description must be needed"],
    },
    price: { type: Number, required: [true, "price must be needed"] },
    duration: { type: Number, required: [true, "duration must be needed"] },
    isDeleted: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export const Service = model<IService>("Service", serviceSchema);
