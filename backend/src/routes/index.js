const { Router } = require('express'); 
const router = Router(); 

const authRoutes = require('./auth/index')
const animalsRoutes = require('./animals'); 
const usersRoutes = require('./users');
const vaccinesRoutes = require('./vaccines');
const vaccineApplicationsRoutes = require('./vaccine_applications');

router.use(authRoutes); 
router.use(animalsRoutes); 
router.use(usersRoutes);  
router.use(vaccinesRoutes); 
router.use(vaccineApplicationsRoutes); 



module.exports = router;