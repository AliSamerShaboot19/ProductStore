import express from 'express'
import cors from 'cors'
import path from 'path'
import { ENV } from './config/env'
import { clerkMiddleware } from '@clerk/express'

import userRoutes from './routes/userRoutes'
import productRoutes from './routes/productRoutes'
import commentRoutes from './routes/commentRoutes'

const app = express()


app.use(cors({ origin: ENV.FRONTEND_URL, credentials: true }))
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

app.use('/api/users', userRoutes)
app.use('/api/products', productRoutes)
app.use('/api/comments', commentRoutes)

if (ENV.NODE_ENV === 'production') {
  const __dirname = path.resolve()
  app.use(express.static(path.join(__dirname, '../frontend/dist')))
  app.get('/*any', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/dist/index.html'))
  })
}

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port ${ENV.PORT}`)
})
