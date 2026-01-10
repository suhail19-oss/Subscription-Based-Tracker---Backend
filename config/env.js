import { config } from "dotenv";

const env = process.env.NODE_ENV || "development";

config({
  path: `.env.${env}.local`,
});

export const {
  PORT,
  NODE_ENV,
  MONGODB_URL,
  JWT_SECRET_KEY,
  JWT_EXPIRES_IN,
  ARCJET_KEY,
  ARCJET_ENV,
  QSTASH_TOKEN,
  QSTASH_URL,
  SERVER_URL,
  PUBLIC_WORKFLOW_URL,
  EMAIL_PASSWORD,
} = process.env;
