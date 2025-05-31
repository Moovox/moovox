const {Router} = require('express'); 
const router = Router(); 
const { authMiddleware } = require('../../middlewares/auth/index'); 
const farmController = require('../../controllers/farm'); 

router.get('/', authMiddleware, farmController.getAllFarms);
/* router.get('/:id', authMiddleware,farmController.getUserByID);
router.post('/', authMiddleware,farmController.createUser);
router.put('/:id', authMiddleware,farmController.updateUser);
router.delete('/:id', authMiddleware,farmController.deleteUser); */


module.exports = router; 