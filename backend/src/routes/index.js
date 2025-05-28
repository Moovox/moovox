const { Router } = require('express'); 
const router = Router(); 

const animalsRoutes = require('./animals'); 
const usersRoutes = require('./users');
const vaccinesRoutes = require('./vaccines');
const vaccineApplicationsRoutes = require('./vaccine_applications');
const authRoutes = require('./auth');

router.use(animalsRoutes); 
router.use(usersRoutes);  
router.use(vaccinesRoutes); 
router.use(vaccineApplicationsRoutes); 
router.use(authRoutes); 



module.exports = router;