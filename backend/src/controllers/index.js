// Controllers Exports
const animalController = require("./animal");
const authController = require("./auth");
const dashboardController = require("./dashboard");
const farmController = require("./farm");
const userController = require("./user");
const vaccineController = require("./vaccine");
const vaccineApplicationController = require("./vaccine_application");

module.exports = {
  animalController,
  authController,
  dashboardController,
  farmController,
  userController,
  vaccineController,
  vaccineApplicationController,
};
