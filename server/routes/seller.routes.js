import expres from 'express'
import { isSeller, sellerLogin, sellerLogout } from '../controllers/seller.controllers';
import { verifySeller } from '../middlewares/verifySeller';

const router = expres.Router();

router.post('/login', sellerLogin)

router.get('/isSeller', verifySeller, isSeller)
router.post('/sellerLogout', verifySeller, sellerLogout)

export default router;