import express from "express";

const router = express.Router();

router.get("/");

router.get("/:id");

// router.patch(
//   '/:id',
//   validateRequest(updateStudentValidationSchema),
//   StudentControllers.updateStudent,
// );

router.delete("/:id");

export const BookingRoute = router;
