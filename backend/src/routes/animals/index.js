const {Router} = require('express');
const router = Router(); 
const animalsController = require('../../controllers/animals')
const {authMiddleware} = require('../../middlewares/auth'); 

router.get('/animals', authMiddleware, animalsController.getAllAnimals); 

module.exports = router