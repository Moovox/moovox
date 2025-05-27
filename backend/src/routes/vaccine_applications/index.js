const {Router} = require('express'); 
const router = Router(); 
const { authMiddleware } = require('../../middlewares/auth/index'); 
const vaccineApplicationController = require('../../controllers/vaccine_application'); 

router.use('/vaccine-applications', authMiddleware, vaccineApplicationController.getAllVaccineApplications); 

module.exports = router; 