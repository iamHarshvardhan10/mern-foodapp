import express from 'express'

import { verifyUser } from '../middlewares/verifyUser.js';
import { addAddress, getAddress } from '../controllers/address.controllers.js';


const router = express.Router()

router.post('/add', verifyUser, addAddress)
router.get('/get', verifyUser, getAddress)

export default router;