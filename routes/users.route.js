import express from 'express'
import { getAllUsers, getSingleUser, deleteSingleUser, updateSingleUser } from '../controllers/users.controller.js'

const router = express.Router()

router.get('/all', getAllUsers)
router.get('/single-user/:id', getSingleUser)
router.delete('/delete-single-user/:id', deleteSingleUser)
router.put('/update-single-user/:id', updateSingleUser)

export default router