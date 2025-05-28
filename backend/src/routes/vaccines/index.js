const {Router} = require('express'); 
const router = Router(); 
const { authMiddleware } = require('../../middlewares/auth/index'); 
const vaccineController = require('../../controllers/vaccine'); 

router.get('/', authMiddleware, vaccineController.getAllVaccines);

module.exports = router; 