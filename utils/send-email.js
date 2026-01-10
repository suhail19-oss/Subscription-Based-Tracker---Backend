import dayjs from "dayjs";
import transporter, { accountEmail } from "../config/nodemailer.js";
import { emailTemplates } from "./email-template.js";

export const sendReminderEmail = async ({ to, type, subscription }) => {
  if (!to || !type) throw new Error("Missing email params");

  const template = emailTemplates.find((t) => t.label === type);
  if (!template) throw new Error("Invalid email type");

  const mailInfo = {
    userName: subscription.user.name,
    subscriptionName: subscription.name,
    renewalDate: dayjs(subscription.renewalDate).format("MMM D, YYYY"),
    planName: subscription.name,
    price: `${subscription.currency} ${subscription.price} (${subscription.frequency})`,
    paymentMethod: subscription.paymentMethod,
    accountSettingsLink: "https://example.com/settings",
    supportLink: "https://example.com/support",
  };

  const mailOptions = {
    from: accountEmail,
    to,
    subject: template.generateSubject(mailInfo),
    html: template.generateBody(mailInfo),
  };

  await transporter.sendMail(mailOptions);

  console.log("📧 Email sent to:", to);
};
