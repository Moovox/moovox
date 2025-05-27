const userService = require('../../services/user'); 

const userController = {
    async getAllUsers(req,res) {
        try {
            const users = await userService.getAllUsers(); 
            res.status(200).json({
                status: 'success', 
                data: users
            }); 
        } catch (error) {
            const error_message = error.message.toLowerCase();

            if(error_message.includes('nenhum')&& error_message.includes('encontrado')) {
                return res.status(404).json({
                    status: 'error',
                    message: error.message
                });
            }

            res.status(500).json({
                status: 'error',
                message: 'Ocorreu um problema ao processar sua solicitação. Por favor, tente novamente mais tarde.'
            });
            
        }
    }
}

module.exports = userController; 