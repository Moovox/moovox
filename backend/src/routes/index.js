const { Router } = require('express'); 
const router = Router(); 

const animalsRoutes = require('./animals'); 
const usersRoutes = require('./users');
const vaccinesRoutes = require('./vaccines');
const vaccineApplicationsRoutes = require('./vaccine_applications');
const authRoutes = require('./auth');

// Aqui definimos corretamente o prefixo de rota
router.use('/animals', animalsRoutes); 
router.use('/users', usersRoutes);  
router.use('/vaccines', vaccinesRoutes); 
router.use('/vaccine-applications', vaccineApplicationsRoutes); 
router.use('/auth', authRoutes); 

module.exports = router;