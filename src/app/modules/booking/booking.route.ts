import express from "express";
import { authMiddleware } from "../../mddlewares/authMiddleware";
import { isUser } from "../../mddlewares/isUser";
import { BookingsControllers } from "./booking.controller";

const router = express.Router();

router.post("/", authMiddleware, isUser, BookingsControllers.createBookings);
router.get("/", BookingsControllers.getAllBookings);
router.get(
  "/my-bookings",
  authMiddleware,
  isUser,
  BookingsControllers.getMyBookings
);

export const BookingRoute = router;
