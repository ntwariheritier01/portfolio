import express from 'express'
import { AuthMiddleware } from '../middlewares/auth.middleware.js';
import { createPost, getPosts, updatePost, deletePost } from '../controllers/blog.controller.js';




const router = express.Router()


router.get('/all', getPosts);
router.post('/create-blog', AuthMiddleware, createPost);
router.put('/update-single-blog/:id', AuthMiddleware, updatePost);
router.delete('/delete-single-blog/:id', AuthMiddleware, deletePost);

export default router
