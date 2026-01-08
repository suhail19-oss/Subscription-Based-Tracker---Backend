import mongoose from "mongoose";
import { MONGODB_URL, NODE_ENV } from "../config/env.js";

if (!MONGODB_URL) {
  throw new Error(
    "Please define MONGODB_URL environment variable inside .env.<development/production>.local"
  );
}

const connectToDatabase = async () => {
  try {
    await mongoose.connect(MONGODB_URL);
    console.log(`Connected to Database in ${NODE_ENV} mode.`);
  } catch {
    console.errpr("Error connecting to database: ", error);
    process.exit(1);
  }
};

export default connectToDatabase;
