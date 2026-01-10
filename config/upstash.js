import { Client } from "@upstash/qstash";
import { QSTASH_TOKEN } from "./env.js";

export const qstashClient = new Client({
  token: QSTASH_TOKEN,
});
