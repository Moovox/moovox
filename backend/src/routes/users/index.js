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

module.exports = router; 