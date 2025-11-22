
import express from "express";
import logger from "./config/logger.config.js";
import {connectDB} from "./config/db.config.js"

const app=express();
const PORT = process.env.PORT || 5000;
app.use(express.json());


logger.info("started")


// Connect DB
connectDB();

app.listen(PORT, () => {
  logger.info(` Server running on port ${PORT}`);
});
