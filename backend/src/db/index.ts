import { drizzle } from 'drizzle-orm/node-postgres'
import { Pool } from 'pg'
import * as schema from './Schema'
import { DB_URL } from '../config/env'

if (!DB_URL) {
  throw new Error('Database URL is not defined in the environment variables.')
}

const pool = new Pool({
  connectionString: DB_URL
})

pool.on('connect', () => {
  console.log('Database connected successfully.💚')
})

export const db = drizzle(pool, { schema })
