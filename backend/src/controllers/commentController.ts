import type { Request, Response } from 'express'
import * as queries from '../db/queries'
import { getAuth } from '@clerk/express'

export const createComment = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req)
    if (!userId) return res.status(401).json({ error: 'Unauthorized' })

    const { productId } = req.params
    const { content } = req.body

    if (!content)
      return res.status(400).json({ error: 'Comment content is required' })

    if (!productId || typeof productId !== 'string') {
      return res.status(400).json({ error: 'Valid productId is required' })
    }
    const product = await queries.getProductById(productId)
    if (!product) return res.status(404).json({ error: 'Product not found' })

    const comment = await queries.createComment({
      content,
      userId,
      productId
    })

    res.status(201).json(comment)
  } catch (error) {
    console.error('Error creating comment : ', error)
    res.status(500).json({ error: 'Failed to create comment' })
  }
}

export const deleteComment = async (req: Request, res: Response) => {
  try {
    const { userId } = getAuth(req)
    if (!userId) return res.status(401).json({ error: 'Unauthorized' })

    const { commentId } = req.params

    if (!commentId || typeof commentId !== 'string') {
      return res.status(400).json({ error: 'Valid productId is required' })
    }
    const comment = await queries.getCommentById(commentId)
    if (!comment) return res.status(404).json({ error: 'Comment not found' })

    if (comment.userId !== userId) {
      return res
        .status(403)
        .json({ error: 'You can delete only your comments' })
    }

    await queries.deleteComment(commentId)
    res.status(200).json({ message: 'Comment deleted successfully' })
  } catch (error) {
    console.error('Error deleting comment : ', error)
    res.status(500).json({ error: 'Failed to delete comment' })
  }
}
