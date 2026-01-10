import { Router } from "express";
import authorize from "../middlewares/auth.middleware.js";
import {
  createSubscription,
  getUserSubscription,
} from "../controllers/subscription.controller.js";

const subscriptionRoutes = Router();

subscriptionRoutes.get("/user/:id", authorize, getUserSubscription);

subscriptionRoutes.post("/", authorize, createSubscription);

export default subscriptionRoutes;
