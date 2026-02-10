import mongoose from "mongoose";
import logger from "./logger.config.js";
import dotenv from "dotenv";
dotenv.config();

export  const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGO_URI;
    console.log("ENV TEST:", process.env.MONGO_URI);

    if (!mongoURI) {
      throw new Error("MONGO_URI not found in .env file");
    }

    await mongoose.connect(mongoURI);

    logger.info("📦 MongoDB Connected Successfully to Atlas Cluster");
  } catch (error: any) {
    logger.error("❌ MongoDB Connection Failed: " + error.message);
    process.exit(1);
  }
};
