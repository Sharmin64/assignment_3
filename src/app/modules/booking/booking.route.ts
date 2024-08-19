import express from "express";
import { authMiddleware } from "../../mddlewares/authMiddleware";
import { BookingsControllers } from "./booking.controller";
import isAuthenticate from "../../mddlewares/isAuthenticate";

const router = express.Router();

router.post(
  "/bookings",
  authMiddleware,
  isAuthenticate(["user"]),
  BookingsControllers.createBookings
);
router.get(
  "/bookings",
  authMiddleware,
  isAuthenticate(["admin"]),
  BookingsControllers.getAllBookings
);
router.get(
  "/my-bookings",
  authMiddleware,
  isAuthenticate(["user"]),
  BookingsControllers.getMyBookings
);

export const BookingRoute = router;
