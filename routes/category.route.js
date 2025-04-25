import express from 'express'
import { createCategory, deleteCategory, updateCategory, getCategory, getAllCategories } from '../controllers/category.controller.js'

const router = express.Router()

router.post('/create-category', createCategory)
router.delete('/delete-category/:id', deleteCategory)
router.put('/update-category/:id', updateCategory)
router.get('/single-category/:id', getCategory)
router.get('/categories', getAllCategories)

export default router