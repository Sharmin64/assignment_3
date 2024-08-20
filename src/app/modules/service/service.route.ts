import express from "express";
import { ServiceControllers } from "./service.controller";
import { authMiddleware } from "../../mddlewares/authMiddleware";
import { isAdmin } from "../../mddlewares/isAdmin";

const router = express.Router();

router.post("/", ServiceControllers.createService, authMiddleware, isAdmin);
router.get("/", ServiceControllers.getAllServices);

router.get("/:id?", ServiceControllers.getSingleService);

router.put("/:id", ServiceControllers.updateService, authMiddleware, isAdmin);

router.delete(
  "/:id",
  ServiceControllers.deleteService,
  authMiddleware,
  isAdmin
);

export const ServiceRoute = router;
