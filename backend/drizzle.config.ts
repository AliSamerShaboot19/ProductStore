import { defineConfig } from 'drizzle-kit'
import { DB_URL } from './src/config/env'

export default defineConfig({
  schema: './src/db/Schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: DB_URL!
  }
})
