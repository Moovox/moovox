/**
 * Validadores comuns para o backend
 */

/**
 * Valida se um email é válido
 * @param {string} email - Email a ser validado
 * @returns {boolean} true se válido
 */
function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Valida se uma string não está vazia
 * @param {string} value - Valor a ser validado
 * @returns {boolean} true se não estiver vazio
 */
function isNotEmpty(value) {
  return value && typeof value === "string" && value.trim().length > 0;
}

/**
 * Valida se um número é positivo
 * @param {number} value - Número a ser validado
 * @returns {boolean} true se positivo
 */
function isPositiveNumber(value) {
  return typeof value === "number" && value > 0;
}

/**
 * Valida se uma data é válida
 * @param {string|Date} date - Data a ser validada
 * @returns {boolean} true se válida
 */
function isValidDate(date) {
  const dateObj = new Date(date);
  return dateObj instanceof Date && !isNaN(dateObj);
}

/**
 * Valida se uma data não é futura
 * @param {string|Date} date - Data a ser validada
 * @returns {boolean} true se não for futura
 */
function isNotFutureDate(date) {
  const dateObj = new Date(date);
  const today = new Date();
  return dateObj <= today;
}

/**
 * Valida se um ID é válido (número inteiro positivo)
 * @param {*} id - ID a ser validado
 * @returns {boolean} true se válido
 */
function isValidId(id) {
  const numId = parseInt(id, 10);
  return Number.isInteger(numId) && numId > 0;
}

/**
 * Valida se uma string tem o comprimento mínimo
 * @param {string} value - Valor a ser validado
 * @param {number} minLength - Comprimento mínimo
 * @returns {boolean} true se atender ao comprimento mínimo
 */
function hasMinLength(value, minLength) {
  return typeof value === "string" && value.length >= minLength;
}

/**
 * Valida se uma string tem o comprimento máximo
 * @param {string} value - Valor a ser validado
 * @param {number} maxLength - Comprimento máximo
 * @returns {boolean} true se não exceder o comprimento máximo
 */
function hasMaxLength(value, maxLength) {
  return typeof value === "string" && value.length <= maxLength;
}

/**
 * Valida se um valor está em uma lista de valores permitidos
 * @param {*} value - Valor a ser validado
 * @param {Array} allowedValues - Lista de valores permitidos
 * @returns {boolean} true se estiver na lista
 */
function isInAllowedValues(value, allowedValues) {
  return allowedValues.includes(value);
}

module.exports = {
  isValidEmail,
  isNotEmpty,
  isPositiveNumber,
  isValidDate,
  isNotFutureDate,
  isValidId,
  hasMinLength,
  hasMaxLength,
  isInAllowedValues,
};
