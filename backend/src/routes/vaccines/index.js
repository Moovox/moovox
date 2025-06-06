const { Router } = require("express");
const router = Router();
const { authMiddleware } = require("../../middlewares/auth/index");
const vaccineController = require("../../controllers/vaccine");
const vaccineService = require("../../services/vaccine");

router.get("/", authMiddleware, vaccineController.getAllVaccines);

// GET /vaccines/manufacturers - Get all manufacturers
router.get("/manufacturers", authMiddleware, async (req, res) => {
  try {
    const manufacturers = await vaccineService.getAllManufacturers();
    res.json({
      message: "Fabricantes encontrados com sucesso",
      data: manufacturers,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar fabricantes",
      error: error.message,
    });
  }
});

// GET /vaccines/types - Get all vaccine types
router.get("/types", authMiddleware, async (req, res) => {
  try {
    const types = await vaccineService.getAllVaccineTypes();
    res.json({
      message: "Tipos de vacinas encontrados com sucesso",
      data: types,
    });
  } catch (error) {
    res.status(500).json({
      message: "Erro ao buscar tipos de vacinas",
      error: error.message,
    });
  }
});

router.get("/:id", authMiddleware, vaccineController.getVaccineByID);
router.post("/", authMiddleware, vaccineController.createVaccine);

module.exports = router;
