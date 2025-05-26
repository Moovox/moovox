const {Router} = require('express'); 
const router = Router();
const usersController = require('../../controllers/users'); 
const {authMiddleware} = require('../../middlewares/auth'); 

router.get('/users', authMiddleware,usersController.getAllUsers); 

module.exports = router; 