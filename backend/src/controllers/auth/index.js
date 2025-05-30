const authService = require('../../services/auth');

/**
 * Controlador responsável pelas operações de autenticação
 */
const authController = {
    /**
     * Realiza o login do usuário
     * @param {Object} req - Objeto de requisição Express
     * @param {Object} res - Objeto de resposta Express
     * @returns {Object} Resposta contendo token e dados do usuário
     */
    async login(req, res) {
        try {
            const { email, password } = req.body;
            
            if (!email || !password) {
                return res.status(400).json({ 
                    message: "Email e senha são obrigatórios" 
                });
            }
            
            const result = await authService.login({ email, password });
            return res.status(200).json(result);
        } catch (error) {
            console.error('Erro na autenticação:', error.message);
            
            const status = error.statusCode || 401;
            let message = error.message || "Falha na autenticação";
            
            // Tratamento específico para erros do Prisma
            if (error.name === 'PrismaClientKnownRequestError') {
                message = "Erro de acesso ao banco de dados";
            }
            
            if (error.name === 'PrismaClientInitializationError') {
                message = "Não foi possível conectar ao banco de dados";
            }
            
            return res.status(status).json({ message });
        }
    }
};

module.exports = authController; 