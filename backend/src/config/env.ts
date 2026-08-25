import dotenv from 'dotenv'

dotenv.config({quiet: true})

export const PORT = process.env.PORT || 3000
export const DB_URL = process.env.DB_URL
export const NODE_ENV = process.env.NODE_ENV || 'development'
export const CLIENT_URL= process.env.CLIENT_URL || 'http://localhost:5173'
