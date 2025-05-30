const {Router} = require('express'); 
const router = Router(); 
const { authMiddleware } = require('../../middlewares/auth/index'); 
const vaccineApplicationController = require('../../controllers/vaccine_application'); 

router.get('/', authMiddleware, vaccineApplicationController.getAllVaccineApplications); 
router.get('/:id', authMiddleware, vaccineApplicationController.getVaccineApplicationByID);
router.post('/', authMiddleware, vaccineApplicationController.createVaccineApplication);
router.put('/:id', authMiddleware, vaccineApplicationController.updateVaccineApplication);
router.delete('/:id', authMiddleware, vaccineApplicationController.deleteVaccineApplication);

module.exports = router; 