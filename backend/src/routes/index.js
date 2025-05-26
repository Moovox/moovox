const {Router} = require('express'); 

const router = Router(); 

const authRoutes = require('./auth');
const userRoutes = require('./users');
const animalRoutes = require('./animals'); 


router.use(authRoutes);
router.use(userRoutes);
router.use(animalRoutes);


module.exports = router; 
