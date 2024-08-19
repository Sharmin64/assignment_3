import express from "express";
import { ServiceControllers } from "./service.controller";
import { authMiddleware } from "../../mddlewares/authMiddleware";
import isAuthenticate from "../../mddlewares/isAuthenticate";

const router = express.Router();

router.post(
  "/",
  ServiceControllers.createService,
  authMiddleware,
  isAuthenticate(["admin"])
);
router.get("/", ServiceControllers.getAllServices);

router.get("/:id?", ServiceControllers.getSingleService);

router.put(
  "/:id",
  ServiceControllers.updateService,
  authMiddleware,
  isAuthenticate(["admin"])
);

router.delete(
  "/:id",
  ServiceControllers.deleteService,
  authMiddleware,
  isAuthenticate(["admin"])
);

export const ServiceRoute = router;
