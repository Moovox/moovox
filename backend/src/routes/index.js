const {Router} = require('express'); 

const router = Router(); 

const authRoutes = require('./auth');
const userRoutes = require('./users');
const animalRoutes = require('./animals');
const vaccineRoutes = require('./vaccines'); 
const applications = require('./vaccine_applications');


router.use(authRoutes);
router.use(userRoutes);
router.use(animalRoutes);
router.use(vaccineRoutes);
router.use(applications);


module.exports = router; 
