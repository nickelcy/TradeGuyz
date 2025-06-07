import { createPool } from "mysql2/promise";
import env from "dotenv";
import { createConnection } from "mysql2";

env.config({ path: `.env.development` });
// env.config({ path: `.env.production` });

const pool = createPool({
  uri: process.env.DB_URI,
});

export default pool;
