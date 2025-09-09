import expres from 'express'
// import { login, register } from '../controllers/user.controllers.js';
import { verifyUser } from '../middlewares/verifyUser.js';
import { isAuth } from '../controllers/user.controllers.js';
import { logout } from '../controllers/user.controllers.js';
import { register } from '../controllers/user.controllers.js';
import { login } from '../controllers/user.controllers.js';


const router = expres.Router();

// REGISTER ROUTE
router.post('/register', register)

// LOGIN ROUTE
router.post('/login', login)

// IS AUTH 
router.get('/isAuth', verifyUser, isAuth)

// LOGOT
router.post('/logout', verifyUser, logout)

export default router;