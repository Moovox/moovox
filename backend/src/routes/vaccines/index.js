const {Router} = require('express'); 
const router = Router(); 
const { authMiddleware } = require('../../middlewares/auth/index'); 
const vaccineController = require('../../controllers/vaccine'); 

router.get('/', authMiddleware, vaccineController.getAllVaccines);
router.get('/:id', authMiddleware, vaccineController.getVaccineByID);
router.post('/', authMiddleware, vaccineController.createVaccine);
router.put('/:id', authMiddleware, vaccineController.updateVaccine);
router.delete('/:id', authMiddleware, vaccineController.deleteVaccine);

module.exports = router; 