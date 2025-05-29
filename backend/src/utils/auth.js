const bcrypt = require('bcrypt');

const SALT_ROUNDS = 10;

/**
 * Cria um hash da senha usando bcrypt
 * @param {string} password - Senha em texto puro
 * @returns {Promise<string>} Hash da senha
 */
async function hashPassword(password) {
    try {
        const salt = await bcrypt.genSalt(SALT_ROUNDS);
        const hash = await bcrypt.hash(password, salt);
        return hash;
    } catch (error) {
        console.error('Erro ao criar hash da senha:', error);
        throw new Error('Erro ao processar a senha');
    }
}

/**
 * Compara uma senha em texto puro com um hash
 * @param {string} password - Senha em texto puro
 * @param {string} hash - Hash da senha
 * @returns {Promise<boolean>} true se a senha corresponde ao hash
 */
async function comparePassword(password, hash) {
    try {
        return await bcrypt.compare(password, hash);
    } catch (error) {
        console.error('Erro ao comparar senhas:', error);
        throw new Error('Erro ao validar a senha');
    }
}

module.exports = {
    hashPassword,
    comparePassword
}; 