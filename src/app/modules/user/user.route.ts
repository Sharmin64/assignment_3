import { UserController } from "./user.controller";
import express from "express";

const router = express.Router();

router.get("/:studentId", UserController.getSingleUser);

router.get("/", UserController.getAllUsers);

export const UserRoute = router;
