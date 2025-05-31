import { createPool } from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const pool = createPool({
  uri: process.env.DB_URI
});

export default pool;
