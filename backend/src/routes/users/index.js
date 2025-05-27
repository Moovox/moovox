const {Router} = require('express'); 
const router = Router(); 
const { authMiddleware } = require('../../middlewares/auth/index'); 
const userController = require('../../controllers/user'); 

router.use('/users', authMiddleware, userController.getAllUsers); 

module.exports = router; 