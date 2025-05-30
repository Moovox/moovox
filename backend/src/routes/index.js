const { Router } = require('express');
const router = Router();

// Importação de rotas
const authRoutes = require('./auth/index');
const animalsRoutes = require('./animals');
const usersRoutes = require('./users');
const vaccinesRoutes = require('./vaccines');
const vaccineApplicationsRoutes = require('./vaccine_applications');
const dashboardRoutes = require('./dashboard');
const farmsRoutes = require('./farms');

// Configuração das rotas
router.use('/auth', authRoutes);
router.use('/animals', animalsRoutes);
router.use('/users', usersRoutes);
router.use('/vaccines', vaccinesRoutes);
router.use('/vaccine-applications', vaccineApplicationsRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/farms', farmsRoutes);

module.exports = router;