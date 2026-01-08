import express from "express";
import { PORT } from "./config/env.js";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js";
import connectToDatabase from "./database/mongodb.js";

const app = express();

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);
app.use("/api/v1/subscriptions", subscriptionRoutes);

app.get("/", (req, res) => {
  res.send("Welcome to the Subscription Based Tracker API!");
});

app.listen(PORT, async () => {
  console.log(`Server running on PORT ${PORT}.`);
  await connectToDatabase();
});

export default app;
