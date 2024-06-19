import { Router } from "express";
import { BookingRoute } from "../modules/booking/booking.route";
import { ServiceRoute } from "../modules/service/service.route";
import { SlotRoute } from "../modules/slot/slot.route";
import { UserRoute } from "../modules/user/user.route";
import { AuthRoutes } from "../modules/Auth/auth.route";

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
  {
    path: "/auth",
    route: AuthRoutes,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
