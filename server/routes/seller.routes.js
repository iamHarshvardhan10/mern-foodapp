import expres from 'express'
import { isSeller, sellerLogin, sellerLogout } from '../controllers/seller.controllers.js';
import { verifySeller } from '../middlewares/verifySeller.js';

const router = expres.Router();

router.post('/login', sellerLogin)

router.get('/isSeller', verifySeller, isSeller)
router.get('/sellerLogout', verifySeller, sellerLogout)

export default router;