import { Client } from "@upstash/qstash";
import { QSTASH_TOKEN } from "./env.js";

export const qstashClient = new Client({
  token: QSTASH_TOKEN,
  baseUrl: "http://127.0.0.1:8080",
});
