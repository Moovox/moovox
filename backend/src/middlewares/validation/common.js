const { validationErrorResponse } = require("../../utils/helpers/response");
const { validators } = require("../../utils");

/**
 * Middleware para validar IDs em parâmetros de rota
 * @param {string} paramName - Nome do parâmetro a ser validado
 */
function validateId(paramName = "id") {
  return (req, res, next) => {
    const id = req.params[paramName];

    if (!validators.isValidId(id)) {
      return validationErrorResponse(
        res,
        { [paramName]: "ID deve ser um número inteiro positivo" },
        "ID inválido"
      );
    }

    // Converte para número para facilitar uso posterior
    req.params[paramName] = parseInt(id, 10);
    next();
  };
}

/**
 * Middleware para validar campos obrigatórios no body
 * @param {Array} requiredFields - Lista de campos obrigatórios
 */
function validateRequiredFields(requiredFields) {
  return (req, res, next) => {
    const errors = {};

    requiredFields.forEach((field) => {
      if (!req.body[field] || !validators.isNotEmpty(req.body[field])) {
        errors[field] = `${field} é obrigatório`;
      }
    });

    if (Object.keys(errors).length > 0) {
      return validationErrorResponse(
        res,
        errors,
        "Campos obrigatórios não preenchidos"
      );
    }

    next();
  };
}

/**
 * Middleware para validar email
 */
function validateEmail(req, res, next) {
  const { email } = req.body;

  if (email && !validators.isValidEmail(email)) {
    return validationErrorResponse(
      res,
      { email: "Email deve ter um formato válido" },
      "Email inválido"
    );
  }

  next();
}

/**
 * Middleware para validar datas
 * @param {Array} dateFields - Lista de campos de data a serem validados
 */
function validateDates(dateFields) {
  return (req, res, next) => {
    const errors = {};

    dateFields.forEach((field) => {
      const dateValue = req.body[field];
      if (dateValue && !validators.isValidDate(dateValue)) {
        errors[field] = `${field} deve ser uma data válida`;
      }
    });

    if (Object.keys(errors).length > 0) {
      return validationErrorResponse(res, errors, "Datas inválidas");
    }

    next();
  };
}

module.exports = {
  validateId,
  validateRequiredFields,
  validateEmail,
  validateDates,
};
