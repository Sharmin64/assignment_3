import { Router } from "express";
import { BookingRoute } from "../modules/booking/booking.route";
import { ServiceRoute } from "../modules/service/service.route";
import { SlotRoute } from "../modules/slot/slot.route";
import { UserRoute } from "../modules/user/user.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/user",
    route: UserRoute,
  },
  {
    path: "/service",
    route: ServiceRoute,
  },
  {
    path: "/slot",
    route: SlotRoute,
  },
  {
    path: "/booking",
    route: BookingRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
