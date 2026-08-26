import express from 'express'
import { PORT, CLIENT_URL } from './config/env'
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors'
import { User } from './db/Schema'

const app = express()

app.use(cors({ origin: CLIENT_URL }))
app.use(clerkMiddleware())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.get('/', (req, res) => {
  res.json({
    message:
      'Welcome to Product Store API , Powered by postgres, Drizzle ORM & Clerk Auth',
    endpoints: 'api/products, api/comments, api/users'
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
