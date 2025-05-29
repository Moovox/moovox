const { Router } = require('express'); 
const router = Router(); 
const { authMiddleware } = require('../../middlewares/auth/index'); 
const animalController = require('../../controllers/animal'); 

// Todas as rotas precisam de autenticação
router.use(authMiddleware);

// Rotas para animais
router.get('/', animalController.listarAnimais);
router.get('/:id', animalController.buscarAnimalPorId);
router.post('/', animalController.criarAnimal);
router.put('/:id', animalController.atualizarAnimal);
router.delete('/:id', animalController.excluirAnimal);

module.exports = router; 