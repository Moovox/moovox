const {Router} = require('express'); 
const router = Router(); 
const { authMiddleware } = require('../../middlewares/auth/index'); 
const farmController = require('../../controllers/farm'); 

router.get('/', authMiddleware, farmController.getAllFarms);
router.get('/:id', authMiddleware,farmController.getFarmByID);
 router.post('/', authMiddleware,farmController.createFarm);
router.put('/:id', authMiddleware,farmController.updateFarm);
router.delete('/:id', authMiddleware,farmController.deleteFarm); 


module.exports = router; 