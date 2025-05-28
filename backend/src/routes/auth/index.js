const { Router } = require('express');
const router = Router(); 
const authController = require('../../controllers/auth'); 

// Adicione um log para depuração de rotas
router.post('/login', (req, res, next) => {
    console.log('Requisição POST recebida em /login');
    next();
}, authController.login); 

module.exports = router;