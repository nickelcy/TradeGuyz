import { createPool } from "mysql2/promise";
import env from "dotenv";

env.config();
// env.config({ path: `.env.production` });

const pool = createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  port: process.env.DB_PORT || 3306,
});

export default pool;
