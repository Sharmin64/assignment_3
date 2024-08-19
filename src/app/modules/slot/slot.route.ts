import express from "express";
import { availableSlots, createSlots } from "./slot.controller";
import { authMiddleware } from "../../mddlewares/authMiddleware";
import isAuthenticate from "../../mddlewares/isAuthenticate";

const router = express.Router();

router.post(
  "/services/slots",
  authMiddleware,
  isAuthenticate(["admin"]),
  createSlots
);

router.get("/slots/availability/:serviceId?", availableSlots);

export const SlotRoute = router;
