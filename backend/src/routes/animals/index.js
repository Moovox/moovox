const {Router} = require('express'); 
const router = Router(); 
const { authMiddleware } = require('../../middlewares/auth/index'); 
const animalController = require('../../controllers/animal'); 

router.get('/', authMiddleware, animalController.getAllAnimals); 

module.exports = router; 