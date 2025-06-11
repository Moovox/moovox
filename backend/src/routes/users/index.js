const {Router} = require('express'); 
const router = Router(); 
const { authMiddleware } = require('../../middlewares/auth/index'); 
const userController = require('../../controllers/user'); 

// Lista todos os usuários
router.get('/', authMiddleware, userController.getAllUsers);

// Cria um novo usuário
router.post('/', authMiddleware, userController.createUser);

// Atualiza um usuário existente
router.put('/:id', authMiddleware, userController.updateUser);

// Exclui um usuário
router.delete('/:id', authMiddleware, userController.deleteUser);

// Remove o vínculo de Farmhand de um usuário
router.delete('/:id/farmhand', authMiddleware, userController.removeFarmhandRole);

// Remove o vínculo de Veterinarian de um usuário
router.delete('/:id/veterinarian', authMiddleware, userController.removeVeterinarianRole);

// Transfere aplicações de um veterinário para outro
router.post('/transfer-applications', authMiddleware, userController.transferVeterinarianApplications);

module.exports = router; 