import express from 'express'
// import { updateCart } from '../controllers/cart.controllers';
import { verifyUser } from '../middlewares/verifyUser.js';
import { getAllOrders, getUserOrders, placeOrderCOD } from '../controllers/order.controllers.js';


const router = express.Router()

router.post('/cod', verifyUser, placeOrderCOD)
router.get('/user', verifyUser, getUserOrders)
router.get('/seller', verifyUser, getAllOrders)

export default router;