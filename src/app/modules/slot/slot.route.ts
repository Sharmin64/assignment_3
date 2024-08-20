import express from "express";
import { availableSlots, createSlots } from "./slot.controller";
import { authMiddleware } from "../../mddlewares/authMiddleware";
import { isAdmin } from "../../mddlewares/isAdmin";

const router = express.Router();

router.post("/services/slots", authMiddleware, isAdmin, createSlots);

router.get("/slots/availability/:serviceId?", availableSlots);

export const SlotRoute = router;
