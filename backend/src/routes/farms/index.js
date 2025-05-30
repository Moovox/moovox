const express = require('express');
const router = express.Router();
const farmController = require('../../controllers/farm');
const { authMiddleware, adminMiddleware } = require('../../middlewares/auth');

// Autenticação obrigatória para todas as rotas
router.use(authMiddleware);

// Rotas públicas (para usuários autenticados)
router.get('/', farmController.listarFazendas);
router.get('/:id', farmController.buscarFazendaPorId);

// Rotas para gestão de animais da fazenda
router.get('/:id/animals', farmController.listarAnimaisPorFazenda);

// Rotas para gestão de usuários da fazenda
router.get('/:id/users', farmController.listarUsuariosPorFazenda);

// Rota para estatísticas da fazenda
router.get('/:id/stats', farmController.getEstatisticasFazenda);

// Rotas administrativas (somente para ADMIN)
router.post('/', adminMiddleware, farmController.criarFazenda);
router.put('/:id', adminMiddleware, farmController.atualizarFazenda);
router.delete('/:id', adminMiddleware, farmController.excluirFazenda);

module.exports = router; 