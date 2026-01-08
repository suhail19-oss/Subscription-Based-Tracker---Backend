import { Router } from "express";

const subscriptionRoutes = Router();

subscriptionRoutes.get("/upcoming-renewals", (req, res) => {
  res.json({ message: "Get Upcoming Renewals" });
});

subscriptionRoutes.get("/user/:id", (req, res) => {
  res.json({ message: "Get All User Subscriptions" });
});

subscriptionRoutes.get("/", (req, res) => {
  res.json({ message: "Get All Subscriptions" });
});

subscriptionRoutes.get("/:id", (req, res) => {
  res.json({ message: "Get Subscription Details" });
});

subscriptionRoutes.post("/", (req, res) => {
  res.json({ message: "Create Subscription" });
});

subscriptionRoutes.put("/:id", (req, res) => {
  res.json({ message: "Update User Subscription" });
});

subscriptionRoutes.put("/:id/cancel", (req, res) => {
  res.json({ message: "Cancel Subscription" });
});

subscriptionRoutes.delete("/:id", (req, res) => {
  res.json({ message: "Delete User Subscription" });
});

export default subscriptionRoutes;
