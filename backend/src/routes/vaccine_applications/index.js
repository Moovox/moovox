const {Router} = require('express'); 
const router = Router();
const applicationsController = require('../../controllers/vaccine_applications'); 
const {authMiddleware} = require('../../middlewares/auth'); 

router.get('/applications', authMiddleware,applicationsController.getAllApplications); 

module.exports = router; 