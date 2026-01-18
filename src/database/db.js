import pkg from "pg";
import config from "../config/config.js";
const { Pool } = pkg;

export const pool = new Pool({
  user: config.db_user,
  password: config.db_password,
  host: config.db_host,
  port: config.db_port,
  database: config.db_database,
});
// Test connection
pool.query("SELECT NOW()", (err, res) => {
  if (err) console.error(err);
  else console.log("PostgreSQL connected:", res.rows[0]);
});
