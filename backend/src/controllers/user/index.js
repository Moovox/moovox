const userService = require('../../services/user');

const userController = {
    async getAllUsers(req, res) {
        try {
            const users = await userService.getAllUsers();
            res.status(200).json({
                status: 'success',
                data: users
            });
        } catch (error) {
            const error_message = error.message.toLowerCase();

            if(error_message.includes('nenhum') && error_message.includes('encontrado')) {
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
    },

    async createUser(req, res) {
        try {
            const userData = req.body;
            const newUser = await userService.createUser(userData);
            
            res.status(201).json({
                status: 'success',
                data: newUser
            });
        } catch (error) {
            const error_message = error.message.toLowerCase();

            if (error_message.includes('já existe')) {
                return res.status(409).json({
                    status: 'error',
                    message: error.message
                });
            }

            if (error_message.includes('não encontrada')) {
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
    },

    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const userData = req.body;
            
            const updatedUser = await userService.updateUser(id, userData);
            
            res.status(200).json({
                status: 'success',
                data: updatedUser
            });
        } catch (error) {
            const error_message = error.message.toLowerCase();

            if (error_message.includes('não encontrado')) {
                return res.status(404).json({
                    status: 'error',
                    message: error.message
                });
            }

            if (error_message.includes('já está em uso')) {
                return res.status(409).json({
                    status: 'error',
                    message: error.message
                });
            }

            res.status(500).json({
                status: 'error',
                message: 'Ocorreu um problema ao processar sua solicitação. Por favor, tente novamente mais tarde.'
            });
        }
    },

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            await userService.deleteUser(id);
            
            res.status(200).json({
                status: 'success',
                message: 'Usuário excluído com sucesso'
            });
        } catch (error) {
            const error_message = error.message.toLowerCase();

            if (error_message.includes('não encontrado')) {
                return res.status(404).json({
                    status: 'error',
                    message: error.message
                });
            }

            if (error_message.includes('último administrador')) {
                return res.status(403).json({
                    status: 'error',
                    message: error.message
                });
            }

            res.status(500).json({
                status: 'error',
                message: 'Ocorreu um problema ao processar sua solicitação. Por favor, tente novamente mais tarde.'
            });
        }
    },
    async getUserByID(req, res) {
        try {
            const { id } = req.params
            const user = await userService.getUserByID(id);
            res.status(200).json({
                status: 'success',
                data: user
            });

        } catch (error) {
            console.log(error);
            const error_message = error.message.toLowerCase();
            if (error_message.includes('não encontrado')) {
                return res.status(404).json({
                    status: 'error',
                    message: error.message
                });
            }

            res.status(500).json({
                status: 'error',
                message: 'Ocorreu um problema ao buscar o usuário. Por favor, tente novamente mais tarde.'
            });

        }
    },
    async createUser(req, res) {
        try {
            const newUser = await userService.createUser(req.body);
            res.status(201).json({
                status: 'success',
                data: newUser
            });
        } catch (error) {
            console.log("Erro apresentado: ", error)
            const error_message = error.message.toLowerCase();

            if (
                error_message.includes('obrigatório') ||
                error_message.includes('deve ser') ||
                error_message.includes('inválido') ||
                error_message.includes('não pode ser')
            ) {
                return res.status(400).json({
                    status: 'error',
                    message: error.message
                });
            }

            res.status(500).json({
                status: 'error',
                message: 'Ocorreu um problema ao criar o usuário. Por favor, tente novamente mais tarde.'
            });
        }
    },
    async updateUser(req, res) {
        try {
            const { id } = req.params;
            const updatedUser = await userService.updateUser(id, req.body);
            res.status(200).json({
                status: 'success',
                data: updatedUser
            });
        } catch (error) {
            console.log("Erro apresentado: ", error);
            const error_message = error.message.toLowerCase();

            if (
                error_message.includes('não encontrado') ||
                error_message.includes('obrigatório') ||
                error_message.includes('deve ser') ||
                error_message.includes('inválido') ||
                error_message.includes('não pode ser')
            ) {
                return res.status(400).json({
                    status: 'error',
                    message: error.message
                });
            }

            res.status(500).json({
                status: 'error',
                message: 'Ocorreu um problema ao atualizar o usuário. Por favor, tente novamente mais tarde.'
            });
        }
    }
}



module.exports = userController; 