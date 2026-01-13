import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  version: process.env.VERSION || "v0.0.1",
};

export default config;
