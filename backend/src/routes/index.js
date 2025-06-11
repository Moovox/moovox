// Routes Index - Centralized Route Management

const { Router } = require("express");
const router = Router();

// Route Imports
const authRoutes = require("./auth");
const animalsRoutes = require("./animals");
const usersRoutes = require("./users");
const vaccinesRoutes = require("./vaccines");
const vaccineApplicationsRoutes = require("./vaccine_applications");
const dashboardRoutes = require("./dashboard");
const farmsRoutes = require("./farms");

// Route Configuration
router.use("/auth", authRoutes);
router.use("/animals", animalsRoutes);
router.use("/users", usersRoutes);
router.use("/vaccines", vaccinesRoutes);
router.use("/vaccine-applications", vaccineApplicationsRoutes);
router.use("/dashboard", dashboardRoutes);
router.use("/farms", farmsRoutes);

module.exports = router;
