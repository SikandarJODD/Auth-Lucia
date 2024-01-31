
import pg from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { DATABASE_URL } from '$env/static/private';

const pool = new pg.Pool({
    connectionString: DATABASE_URL,
});
export const db = drizzle(pool);