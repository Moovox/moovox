const { Router } = require('express'); 
const router = Router(); 

const animalsRoutes = require('./animals'); 
const usersRoutes = require('./users');
const vaccinesRoutes = require('./vaccines');
const vaccineApplicationsRoutes = require('./vaccine_applications');

router.use(animalsRoutes); 
router.use(usersRoutes);  
router.use(vaccinesRoutes); 
router.use(vaccineApplicationsRoutes); 



module.exports = router;