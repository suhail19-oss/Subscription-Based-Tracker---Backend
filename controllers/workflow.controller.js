import Subscription from "../models/subscription.model.js";
import dayjs from "dayjs";
import { sendReminderEmail } from "../utils/send-email.js";

export const sendReminders = async (context) => {
  console.log("🔥 WORKFLOW HIT");

  const { subscriptionId } = context.requestPayload;

  const subscription = await context.run("fetch-subscription", async () => {
    return Subscription.findById(subscriptionId).populate("user", "name email");
  });

  if (!subscription || subscription.status !== "active") return;

  const TEST_REMINDERS = [
    { seconds: 30, label: "7 days before reminder" },
    { seconds: 20, label: "5 days before reminder" },
    { seconds: 10, label: "2 days before reminder" },
  ];

  for (const r of TEST_REMINDERS) {
    await context.sleepUntil(
      `${r.seconds}-seconds`,
      dayjs().add(r.seconds, "second").toDate()
    );

    await context.run(`send-email-${r.seconds}`, async () => {
      console.log(`📧 Sending reminder after ${r.seconds} seconds`);

      await sendReminderEmail({
        to: subscription.user.email,
        type: r.label,
        subscription,
      });
    });
  }
};
