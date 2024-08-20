import express from "express";
import { ServiceControllers } from "./service.controller";
import { authMiddleware } from "../../mddlewares/authMiddleware";
import isAuthenticate from "../../mddlewares/isAuthenticate";

const router = express.Router();

router.post(
  "/services",
  ServiceControllers.createService,
  authMiddleware,
  isAuthenticate(["admin"])
);
router.get("/services", ServiceControllers.getAllServices);

router.get("/services/:id?", ServiceControllers.getSingleService);

router.put(
  "/services/:id",
  ServiceControllers.updateService,
  authMiddleware,
  isAuthenticate(["admin"])
);

router.delete(
  "/services/:id",
  ServiceControllers.deleteService,
  authMiddleware,
  isAuthenticate(["admin"])
);

export const ServiceRoute = router;
