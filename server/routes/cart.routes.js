import express from 'express'
import { updateCart } from '../controllers/cart.controllers.js';
import { verifyUser } from '../middlewares/verifyUser.js';


const router = express.Router()

router.post('/update', verifyUser, updateCart)

export default router;