import { pgTable, text, timestamp, uuid } from 'drizzle-orm/pg-core'
import { relations } from 'drizzle-orm'

export const users = pgTable('users', {
  id: text('id').primaryKey(),
  email: text('email').notNull().unique(),
  name: text('name'),
  imageUrl: text('image_url'),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow().notNull()
})

export const products = pgTable('products', {
  id: uuid('id').primaryKey().defaultRandom(),
  title: text('title').notNull(),
  description: text('description'),
  imageUrl: text('image_url'),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow().notNull()
})

export const comments = pgTable('comments', {
  id: uuid('id').primaryKey().defaultRandom(),
  content: text('content').notNull(),
  productId: uuid('product_id')
    .notNull()
    .references(() => products.id, { onDelete: 'cascade' }),
  userId: text('user_id')
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  createdAt: timestamp('created_at', { mode: 'date' }).defaultNow().notNull(),
  updatedAt: timestamp('updated_at', { mode: 'date' }).defaultNow().notNull()
})

export const usersRelations = relations(users, ({ many }) => ({
  comments: many(comments),
  products: many(products)
}))

export const productsRelations = relations(products, ({ many, one }) => ({
  comments: many(comments),
  user: one(users, { fields: [products.userId], references: [users.id] })
}))

export const commentsRelations = relations(comments, ({ one }) => ({
  product: one(products, {
    fields: [comments.productId],
    references: [products.id]
  }),
  user: one(users, { fields: [comments.userId], references: [users.id] })
}))

export type User = typeof users.$inferSelect
export type NewUser = typeof users.$inferInsert

export type Product = typeof products.$inferSelect
export type NewProduct = typeof products.$inferInsert

export type Comment = typeof comments.$inferSelect
export type NewComment = typeof comments.$inferInsert