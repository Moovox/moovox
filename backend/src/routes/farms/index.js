const express = require("express");
const router = express.Router();
const farmController = require("../../controllers/farm");
const { authMiddleware, adminMiddleware } = require("../../middlewares/auth");

// Autenticação obrigatória para todas as rotas
router.use(authMiddleware);

// Rotas públicas (para usuários autenticados)
router.get("/", farmController.listFarms);
router.get("/:id", farmController.getFarmById);

// Rotas para gestão de animais da fazenda
router.get("/:id/animals", farmController.listAnimalsByFarm);

// Rotas para gestão de usuários da fazenda
router.get("/:id/users", farmController.listUsersByFarm);

// Rota para estatísticas da fazenda
router.get("/:id/stats", farmController.getFarmStats);

// Rotas administrativas (somente para ADMIN)
router.post("/", adminMiddleware, farmController.createFarm);
router.put("/:id", adminMiddleware, farmController.updateFarm);
router.delete("/:id", adminMiddleware, farmController.deleteFarm);

module.exports = router;
