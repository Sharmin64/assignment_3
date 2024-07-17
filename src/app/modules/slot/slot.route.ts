import express from "express";

const router = express.Router();

router.get("/");

router.get("/:id");

router.delete("/:id");

export const SlotRoute = router;
