const {Router} = require('express'); 
const router = Router();
const vaccinesController = require('../../controllers/vaccines'); 
const {authMiddleware} = require('../../middlewares/auth'); 

router.get('/vaccines', authMiddleware,vaccinesController.getAllVaccines); 

module.exports = router; 