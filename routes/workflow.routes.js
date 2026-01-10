import { Router } from "express";
import { serve } from "@upstash/workflow/express";
import { sendReminders } from "../controllers/workflow.controller.js";

const router = Router();

router.post(
  "/subscription/reminder",
  serve(sendReminders, {
    currentSigningKey: process.env.QSTASH_CURRENT_SIGNING_KEY,
    nextSigningKey: process.env.QSTASH_NEXT_SIGNING_KEY,
  })
);

export default router;
