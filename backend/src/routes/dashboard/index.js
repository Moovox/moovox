const express = require('express');
const router = express.Router();
const dashboardController = require('../../controllers/dashboard');
const { authMiddleware } = require('../../middlewares/auth');

// Todas as rotas do dashboard requerem autenticação
router.use(authMiddleware);

// Rotas do dashboard
router.get('/stats', dashboardController.getStats);
router.get('/latest-users', dashboardController.getLatestUsers);
router.get('/pending-vaccines', dashboardController.getPendingVaccines);
router.get('/health-alerts', dashboardController.getHealthAlerts);
router.get('/telemetry', dashboardController.getAnimalTelemetry);

module.exports = router; 