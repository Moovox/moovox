const { Router } = require('express');
const router = Router(); 
const authController = require('../../controllers/auth'); 

router.post('/login', authController.login); 

module.exports = router