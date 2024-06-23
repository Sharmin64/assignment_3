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

// route('/login').post(userLogin);

// router.get("/", UserController.getAllUsers);

export const UserRoute = router;
