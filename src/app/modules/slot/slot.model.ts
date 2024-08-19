import { Schema, model } from "mongoose";
import TSlot from "./slot.interface";

const slotSchema = new Schema<TSlot>(
  {
    service: {
      type: Schema.Types.ObjectId,
      ref: "Service",
      required: [true, "service identification id required"],
    },
    date: { type: Date },
    startTime: { type: String, required: [true, "start time must needed"] },
    endTime: { type: String, required: [true, "end time must needed"] },
    isBooked: {
      type: String,
      enum: ["available", "booked", "canceled"],
      default: "available",
    },
  },
  { timestamps: true }
);

export const Slot = model<TSlot>("Slot", slotSchema);
