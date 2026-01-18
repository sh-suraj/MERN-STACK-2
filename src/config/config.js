import dotenv from "dotenv";

dotenv.config();

const config = {
  port: process.env.PORT || 3000,
  version: process.env.VERSION || "v0.0.1",
  db_user: process.env.DB_USER  || "postgres",
  db_password: process.env.DB_PASSWORD,
  db_host: process.env.DB_HOST,
  db_port: Number(process.env.DB_PORT),
  db_database: process.env.DB_DATABASE,



};

export default config;
