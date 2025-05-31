const { Router } = require('express'); 
const router = Router(); 

const authRoutes = require('./auth/index')
const animalsRoutes = require('./animals'); 
const usersRoutes = require('./users');
const vaccinesRoutes = require('./vaccines');
const vaccineApplicationsRoutes = require('./vaccine_applications');
const farmsRoutes = require('./farms'); 

router.use('/auth', authRoutes); 
router.use('/animals', animalsRoutes); 
router.use('/users', usersRoutes);  
router.use('/vaccines', vaccinesRoutes); 
router.use('/vaccine-applications', vaccineApplicationsRoutes); 
router.use('/farms', farmsRoutes); 



module.exports = router;