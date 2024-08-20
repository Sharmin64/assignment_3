import validateRequest from "../../mddlewares/validateRequest";
import { UserController } from "./user.controller";
import express from "express";
import UserZodValidationSchema from "./user.validation";

const router = express.Router();

router.post(
  "/signup",
  validateRequest(UserZodValidationSchema),
  UserController.userSignup
);

router.post("/login", UserController.userLogin);

export const UserRoute = router;
