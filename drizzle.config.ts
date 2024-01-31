import { defineConfig } from 'drizzle-kit'
export default defineConfig({
    schema: "./src/lib/server/schema.ts",
    driver: 'pg',
    dbCredentials: {
        connectionString: process.env.DATABASE_URL,
    },
    out: "./drizzle",
})