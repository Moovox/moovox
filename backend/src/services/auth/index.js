const prisma = require('../../config/database');
const { comparePassword } = require('../../utils/auth');
const jwt = require('jsonwebtoken');
const config = require('../../config/env');

/**
 * Serviço responsável pelas operações de autenticação
 */
const authService = {
    /**
     * Realiza o login do usuário verificando credenciais e gerando token
     * @param {Object} data - Objeto contendo email e senha
     * @returns {Object} Token e dados do usuário autenticado
     * @throws {Error} Se as credenciais forem inválidas ou ocorrer algum erro
     */
    async login(data) {
        try {
            // Busca o usuário pelo email
            const user = await prisma.users.findUnique({ 
                where: { email: data.email },
                include: {
                    farm: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            });
            
            // Verifica se o usuário existe
            if (!user) {
                const error = new Error("Usuário não encontrado");
                error.statusCode = 404;
                throw error;
            }
            
            // Verifica se a senha está correta
            const isPasswordValid = await comparePassword(data.password, user.password);
            
            if (!isPasswordValid) {
                const error = new Error("Email ou senha inválidos");
                error.statusCode = 401;
                throw error;
            }
            
            // Gera o token JWT
            const token = jwt.sign(
                { 
                    id: user.id, 
                    role: user.role,
                    farmId: user.farm.id,
                    email: user.email
                }, 
                config.jwt.secret, 
                { expiresIn: config.jwt.expiresIn }
            );

            // Retorna os dados de autenticação
            return { 
                token, 
                user: { 
                    id: user.id, 
                    email: user.email, 
                    role: user.role,
                    farmId: user.farm.id,
                    farmName: user.farm.name
                } 
            };
        } catch (error) {
            throw error;
        }
    }
};

module.exports = authService; 