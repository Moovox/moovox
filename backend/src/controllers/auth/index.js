const authService = require('../../services/auth');

const authController = { 
    async login(req, res) {
        try {
            const { email, password } = req.body;
            
            // Validação básica
            if (!email || !password) {
                return res.status(400).json({ 
                    success: false,
                    message: "Email e senha são obrigatórios" 
                });
            }

            const result = await authService.login({ email, password });
            
            // Resposta padronizada
            res.status(200).json({
                success: true,
                token: result.token,
                user: result.user
            });
            
        } catch (error) {
            console.error("Erro no login:", error.message); // Log mais seguro
            
            const statusCode = error.statusCode || 401;
            res.status(statusCode).json({
                success: false,
                message: error.message || "Falha na autenticação"
            });
        }
    }
}

module.exports = authController;