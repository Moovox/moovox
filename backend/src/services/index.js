// Services Exports
const animalService = require("./animal");
const authService = require("./auth");
const farmService = require("./farm");
const userService = require("./user");
const vaccineService = require("./vaccine");
const vaccineApplicationService = require("./vaccine_application");

module.exports = {
  animalService,
  authService,
  farmService,
  userService,
  vaccineService,
  vaccineApplicationService,
};
