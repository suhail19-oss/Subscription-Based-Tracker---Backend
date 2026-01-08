import { Router } from "express";

const authRouter = Router();

authRouter.post("/signup", (req, res) => {
  message: "Sign-Up";
});

authRouter.post("/signin", (req, res) => {
  message: "Sign-In";
});

authRouter.post("/signout", (req, res) => {
  message: "Sign-Out";
});

export default authRouter;
