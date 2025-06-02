const farmService = require("../../services/farm");
const animalService = require("../../services/animal");
const userService = require("../../services/user");

const farmController = {
  async listFarms(req, res) {
    try {
      const farms = await farmService.getAllFarms();
      res.status(200).json({
        status: "success",
        data: farms,
      });
    } catch (error) {
      console.error("Error listing farms:", error);

      res.status(500).json({
        status: "error",
        message:
          "An error occurred while processing your request. Please try again later.",
      });
    }
  },
  async getFarmById(req, res) {
    try {
      const { id } = req.params;
      const farm = await farmService.getFarmById(parseInt(id));

      res.status(200).json({
        status: "success",
        data: farm,
      });
    } catch (error) {
      console.error("Error fetching farm:", error);

      const error_message = error.message.toLowerCase();
      if (
        error_message.includes("not found") ||
        (error_message.includes("não") && error_message.includes("encontrada"))
      ) {
        return res.status(404).json({
          status: "error",
          message: error.message,
        });
      }

      res.status(500).json({
        status: "error",
        message:
          "An error occurred while processing your request. Please try again later.",
      });
    }
  },
  async createFarm(req, res) {
    try {
      const farm = await farmService.createFarm(req.body);

      res.status(201).json({
        status: "success",
        data: farm,
      });
    } catch (error) {
      console.error("Error creating farm:", error);

      if (error.message) {
        return res.status(400).json({
          status: "error",
          message: error.message,
        });
      }

      res.status(500).json({
        status: "error",
        message:
          "An error occurred while processing your request. Please try again later.",
      });
    }
  },

  async updateFarm(req, res) {
    try {
      const { id } = req.params;
      const farm = await farmService.updateFarm(parseInt(id), req.body);

      res.status(200).json({
        status: "success",
        data: farm,
      });
    } catch (error) {
      console.error("Error updating farm:", error);

      const error_message = error.message.toLowerCase();
      if (
        error_message.includes("not found") ||
        (error_message.includes("não") && error_message.includes("encontrada"))
      ) {
        return res.status(404).json({
          status: "error",
          message: error.message,
        });
      }

      res.status(500).json({
        status: "error",
        message:
          "An error occurred while processing your request. Please try again later.",
      });
    }
  },
  async deleteFarm(req, res) {
    try {
      const { id } = req.params;
      await farmService.deleteFarm(parseInt(id));

      res.status(204).send();
    } catch (error) {
      console.error("Error deleting farm:", error);

      const error_message = error.message.toLowerCase();
      if (
        error_message.includes("not found") ||
        (error_message.includes("não") && error_message.includes("encontrada"))
      ) {
        return res.status(404).json({
          status: "error",
          message: error.message,
        });
      }

      if (
        (error_message.includes("has") &&
          (error_message.includes("animals") ||
            error_message.includes("users"))) ||
        (error_message.includes("possui") &&
          (error_message.includes("animais") ||
            error_message.includes("usuários")))
      ) {
        return res.status(400).json({
          status: "error",
          message: error.message,
        });
      }

      res.status(500).json({
        status: "error",
        message:
          "An error occurred while processing your request. Please try again later.",
      });
    }
  },
  async listAnimalsByFarm(req, res) {
    try {
      const { id } = req.params;
      const farmId = parseInt(id);

      // Check permission: user must be admin or belong to the farm
      if (req.user.role !== "ADMIN" && req.user.farm_id !== farmId) {
        return res.status(403).json({
          status: "error",
          message:
            "You do not have permission to access the animals of this farm",
        });
      }

      const animals = await animalService.getAllAnimals(farmId);

      res.status(200).json({
        status: "success",
        data: animals,
      });
    } catch (error) {
      console.error("Error listing farm animals:", error);

      res.status(500).json({
        status: "error",
        message:
          "An error occurred while processing your request. Please try again later.",
      });
    }
  },
  async listUsersByFarm(req, res) {
    try {
      const { id } = req.params;
      const farmId = parseInt(id);

      // Check permission: user must be admin or belong to the farm
      if (req.user.role !== "ADMIN" && req.user.farm_id !== farmId) {
        return res.status(403).json({
          status: "error",
          message:
            "You do not have permission to access the users of this farm",
        });
      }

      const users = await userService.getUsersByFarm(farmId);

      res.status(200).json({
        status: "success",
        data: users,
      });
    } catch (error) {
      console.error("Error listing farm users:", error);

      res.status(500).json({
        status: "error",
        message:
          "An error occurred while processing your request. Please try again later.",
      });
    }
  },
  async getFarmStats(req, res) {
    try {
      const { id } = req.params;
      const farmId = parseInt(id);

      // Check permission: user must be admin or belong to the farm
      if (req.user.role !== "ADMIN" && req.user.farm_id !== farmId) {
        return res.status(403).json({
          status: "error",
          message:
            "You do not have permission to access the statistics of this farm",
        });
      }

      const stats = await farmService.getFarmStats(farmId);

      res.status(200).json({
        status: "success",
        data: stats,
      });
    } catch (error) {
      console.error("Error fetching farm statistics:", error);

      const error_message = error.message.toLowerCase();
      if (
        error_message.includes("not found") ||
        (error_message.includes("não") && error_message.includes("encontrada"))
      ) {
        return res.status(404).json({
          status: "error",
          message: error.message,
        });
      }

      res.status(500).json({
        status: "error",
        message:
          "An error occurred while processing your request. Please try again later.",
      });
    }
  },
};

module.exports = farmController;
