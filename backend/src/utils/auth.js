const bcrypt = require('bcrypt');
const config = require('../config/env');

const SALT_ROUNDS = process.env.BCRYPT_SALT_ROUNDS ? parseInt(process.env.BCRYPT_SALT_ROUNDS, 10) : 10;

/**
 * Cria um hash da senha usando bcrypt
 * @param {string} password - Senha em texto puro
 * @returns {Promise<string>} Hash da senha
 * @throws {Error} Se ocorrer um erro ao processar a senha
 */
async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        return await bcrypt.hash(password, salt);
    } catch (error) {
        throw new Error('Erro ao processar a senha');
    }
}

/**
 * Compara uma senha em texto puro com um hash
 * @param {string} password - Senha em texto puro
 * @param {string} hash - Hash da senha
 * @returns {Promise<boolean>} true se a senha corresponde ao hash
 * @throws {Error} Se ocorrer um erro ao validar a senha
 */
async function comparePassword(password, hash) {
    try {
        return await bcrypt.compare(password, hash);
    } catch (error) {
        throw new Error('Erro ao validar a senha');
    }
}

module.exports = {
    hashPassword,
    comparePassword
}; 