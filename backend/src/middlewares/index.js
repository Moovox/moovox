// Middlewares Exports

// Auth
const authMiddleware = require("./auth");

// Validation
const validationMiddleware = require("./validation/common");

// Error Handling
const errorMiddleware = require("./error/handler");

module.exports = {
  auth: authMiddleware,
  validation: validationMiddleware,
  error: errorMiddleware,
};
