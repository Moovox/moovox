const authService = require('../../services/auth'); 


const authController = { 
    async login(req,res) {
        try {
            // Caputrar o email e a senha do corpo da requisição.
            const {email,password} = req.body;  
            // Executar o serviço do authService
            const user = await authService.login({email,password}); 
            // Retornar para o cliente um status 201 e informando a criação do token
            res.status(201).json(user); 
        } catch (error) {
            console.log("Usuário não autorizado" + error); 
            res.status(401).json({message: "Usuário não autorizado" , error: error.message});
        }
    }
}

module.exports = authController; 