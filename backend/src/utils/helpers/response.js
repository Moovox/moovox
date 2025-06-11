/**
 * Utilitários para padronizar respostas da API
 */

/**
 * Resposta de sucesso padronizada
 * @param {Object} res - Objeto response do Express
 * @param {*} data - Dados a serem retornados
 * @param {string} message - Mensagem de sucesso
 * @param {number} statusCode - Código de status HTTP
 */
function successResponse(
  res,
  data = null,
  message = "Operação realizada com sucesso",
  statusCode = 200
) {
  return res.status(statusCode).json({
    success: true,
    message,
    data,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Resposta de erro padronizada
 * @param {Object} res - Objeto response do Express
 * @param {string} message - Mensagem de erro
 * @param {number} statusCode - Código de status HTTP
 * @param {*} errors - Detalhes dos erros (opcional)
 */
function errorResponse(
  res,
  message = "Erro interno do servidor",
  statusCode = 500,
  errors = null
) {
  return res.status(statusCode).json({
    success: false,
    message,
    errors,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Resposta de validação com erros
 * @param {Object} res - Objeto response do Express
 * @param {Array|Object} validationErrors - Erros de validação
 * @param {string} message - Mensagem principal
 */
function validationErrorResponse(
  res,
  validationErrors,
  message = "Dados inválidos"
) {
  return res.status(400).json({
    success: false,
    message,
    errors: validationErrors,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Resposta para recurso não encontrado
 * @param {Object} res - Objeto response do Express
 * @param {string} resource - Nome do recurso não encontrado
 */
function notFoundResponse(res, resource = "Recurso") {
  return res.status(404).json({
    success: false,
    message: `${resource} não encontrado`,
    timestamp: new Date().toISOString(),
  });
}

/**
 * Resposta para acesso não autorizado
 * @param {Object} res - Objeto response do Express
 * @param {string} message - Mensagem de erro
 */
function unauthorizedResponse(res, message = "Acesso não autorizado") {
  return res.status(401).json({
    success: false,
    message,
    timestamp: new Date().toISOString(),
  });
}

module.exports = {
  successResponse,
  errorResponse,
  validationErrorResponse,
  notFoundResponse,
  unauthorizedResponse,
};
