import { Date, Schema } from "mongoose";

export type TSlot = {
  service: Schema.Types.ObjectId;
  date: Date;
  startTime: string;
  endTime: string;
  isBooked: "available" | "booked" | "canceled";
};
