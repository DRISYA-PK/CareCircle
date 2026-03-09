import { createClient } from "redis";

export const redisClient = createClient({
  url:
});

redisClient.on("connect", () => {
  console.log("Redis Connected");
});

redisClient.on("error", (err) => {
  console.log("Redis Error", err);
});

await redisClient.connect();
