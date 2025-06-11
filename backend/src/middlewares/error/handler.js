const { errorResponse } = require("../../utils/helpers/response");

/**
 * Middleware global para tratamento de erros
 */
function globalErrorHandler(err, req, res, next) {
  console.error("Erro capturado pelo middleware:", err);

  // Erro de validação do Prisma
  if (err.code === "P2002") {
    return errorResponse(
      res,
      "Dados duplicados. Este registro já existe.",
      409
    );
  }

  // Erro de registro não encontrado do Prisma
  if (err.code === "P2025") {
    return errorResponse(res, "Registro não encontrado.", 404);
  }

  // Erro de validação do Prisma
  if (err.code === "P2003") {
    return errorResponse(
      res,
      "Violação de chave estrangeira. Verifique os dados relacionados.",
      400
    );
  }

  // Erro de JWT
  if (err.name === "JsonWebTokenError") {
    return errorResponse(res, "Token inválido.", 401);
  }

  // Erro de JWT expirado
  if (err.name === "TokenExpiredError") {
    return errorResponse(res, "Token expirado.", 401);
  }

  // Erro de sintaxe JSON
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return errorResponse(res, "JSON inválido na requisição.", 400);
  }

  // Erro personalizado com status
  if (err.status || err.statusCode) {
    return errorResponse(res, err.message, err.status || err.statusCode);
  }

  // Erro genérico
  return errorResponse(res, "Erro interno do servidor", 500);
}

/**
 * Middleware para capturar rotas não encontradas
 */
function notFoundHandler(req, res, next) {
  return errorResponse(
    res,
    `Rota não encontrada: ${req.method} ${req.originalUrl}`,
    404
  );
}

/**
 * Wrapper para funções async que automaticamente captura erros
 * @param {Function} fn - Função async a ser executada
 */
function asyncHandler(fn) {
  return (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
  };
}

module.exports = {
  globalErrorHandler,
  notFoundHandler,
  asyncHandler,
};
