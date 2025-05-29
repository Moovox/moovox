const { Router } = require('express');
const router = Router();
const { authMiddleware } = require('../../middlewares/auth/index');
const animalController = require('../../controllers/animal');

// Listar todos os animais
router.get('/', authMiddleware, animalController.getAllAnimals);

// Buscar animal por ID
router.get('/:id', authMiddleware, animalController.getAnimalById);

// Criar novo animal
router.post('/', authMiddleware, animalController.createAnimal);

// Atualizar animal
router.put('/:id', authMiddleware, animalController.updateAnimal);

// Excluir animal
router.delete('/:id', authMiddleware, animalController.deleteAnimal);

module.exports = router; 