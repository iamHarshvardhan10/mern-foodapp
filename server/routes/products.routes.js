import express from 'express'
import { upload } from '../config/multer.js';
import { verifyUser } from '../middlewares/verifyUser.js';
import { addProduct, changeStock, productByID, productList } from '../controllers/product.controllers.js';
import { verifySeller } from '../middlewares/verifySeller.js';

const router = express.Router()

router.post('/add', upload.array(["images"]), verifyUser, addProduct)


router.get('/list', productList)

router.get('/id', productByID)

router.post('/stock', verifySeller, changeStock)

export default router;