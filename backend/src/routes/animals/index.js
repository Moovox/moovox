const {Router} = require('express'); 
const router = Router(); 
const { authMiddleware } = require('../../middlewares/auth/index'); 
const animalController = require('../../controllers/animal'); 

router.get('/', authMiddleware, animalController.getAllAnimals);
router.get('/:id', authMiddleware, animalController.getAnimalByID);
router.post('/',authMiddleware,animalController.createAnimal);
router.put('/:id',authMiddleware,animalController.updateAnimal);

module.exports = router; 