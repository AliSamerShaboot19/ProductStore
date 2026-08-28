import express from 'express'
import { PORT, CLIENT_URL } from './config/env'
import { clerkMiddleware } from '@clerk/express'
import cors from 'cors'
import userRoutes from './routes/userRoutes'
import productRoutes from './routes/productRoutes'
import commentRoutes from './routes/userRoutes'

const app = express()

app.use(cors({ origin: CLIENT_URL, credentials: true }))
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

app.use('api/users', userRoutes)
app.use('api/products', productRoutes)
app.use('api/comments', commentRoutes)

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
