const userService = require('../../services/user');

const userController = {
    async getAllUsers(req, res) {
        try {
            // Obter farmId da query string, se fornecido
            const farmId = req.query.farmId ? parseInt(req.query.farmId, 10) : null;
            
            // Se o usuário não for admin e tentar acessar fazenda diferente da sua
            if (farmId && req.user.role !== 'ADMIN' && req.user.farm_id !== farmId) {
                return res.status(403).json({
                    status: 'error',
                    message: 'Você não tem permissão para acessar os usuários desta fazenda'
                });
            }
            
            // Buscar usuários, filtrando por fazenda se o farmId for fornecido
            const users = farmId 
                ? await userService.getUsersByFarm(farmId)
                : await userService.getAllUsers();
                
            res.status(200).json({
                status: 'success',
                data: users
            });
        } catch (error) {
            console.error('Erro ao buscar usuários:', error);
            
            res.status(500).json({
                status: 'error',
                message: 'Ocorreu um problema ao processar sua solicitação. Por favor, tente novamente mais tarde.'
            });
        }
    },

    async getUserByID(req, res) {
        try {
            const { id } = req.params
            const user = await userService.getUserByID(parseInt(id, 10));
            res.status(200).json({
                status: 'success',
                data: user
            });
        } catch (error) {
            console.error('Erro ao buscar usuário por ID:', error);
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
            const userData = req.body;
            const newUser = await userService.createUser(userData);
            
            res.status(201).json({
                status: 'success',
                data: newUser
            });
        } catch (error) {
            console.error('Erro ao criar usuário:', error);
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
            const userData = req.body;
            
            const updatedUser = await userService.updateUser(parseInt(id, 10), userData);
            
            res.status(200).json({
                status: 'success',
                data: updatedUser
            });
        } catch (error) {
            console.error('Erro ao atualizar usuário:', error);
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
                message: 'Ocorreu um problema ao atualizar o usuário. Por favor, tente novamente mais tarde.'
            });
        }
    },

    async deleteUser(req, res) {
        try {
            const { id } = req.params;
            await userService.deleteUser(parseInt(id, 10));
            
            res.status(200).json({
                status: 'success',
                message: 'Usuário excluído com sucesso'
            });
        } catch (error) {
            console.error('Erro ao excluir usuário:', error);
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
                message: 'Ocorreu um problema ao excluir o usuário. Por favor, tente novamente mais tarde.'
            });
        }
    },

    // Remove o vínculo de trabalhador rural (Farmhand) de um usuário
    async removeFarmhandRole(req, res) {
        try {
            const { id } = req.params;
            await userService.removeFarmhandRole(parseInt(id, 10));
            
            res.status(200).json({
                status: 'success',
                message: 'Vínculo como trabalhador rural removido com sucesso'
            });
        } catch (error) {
            console.error('Erro ao remover vínculo de trabalhador rural:', error);
            const error_message = error.message.toLowerCase();

            if (error_message.includes('não encontrado') || error_message.includes('não está vinculado')) {
                return res.status(404).json({
                    status: 'error',
                    message: error.message
                });
            }

            res.status(500).json({
                status: 'error',
                message: error.message || 'Ocorreu um problema ao remover o vínculo. Por favor, tente novamente mais tarde.'
            });
        }
    },

    // Remove o vínculo de veterinário de um usuário
    async removeVeterinarianRole(req, res) {
        try {
            const { id } = req.params;
            await userService.removeVeterinarianRole(parseInt(id, 10));
            
            res.status(200).json({
                status: 'success',
                message: 'Vínculo como veterinário removido com sucesso'
            });
        } catch (error) {
            console.error('Erro ao remover vínculo de veterinário:', error);
            const error_message = error.message.toLowerCase();

            if (error_message.includes('não encontrado') || error_message.includes('não está vinculado')) {
                return res.status(404).json({
                    status: 'error',
                    message: error.message
                });
            }

            if (error_message.includes('aplicações')) {
                return res.status(400).json({
                    status: 'error',
                    message: error.message
                });
            }

            res.status(500).json({
                status: 'error',
                message: error.message || 'Ocorreu um problema ao remover o vínculo. Por favor, tente novamente mais tarde.'
            });
        }
    },

    // Transfere aplicações de um veterinário para outro
    async transferVeterinarianApplications(req, res) {
        try {
            const { sourceId, targetId } = req.body;
            
            if (!sourceId || !targetId) {
                return res.status(400).json({
                    status: 'error',
                    message: 'IDs de origem e destino são obrigatórios'
                });
            }
            
            const result = await userService.transferVeterinarianApplications(sourceId, targetId);
            
            res.status(200).json({
                status: 'success',
                ...result
            });
        } catch (error) {
            console.error('Erro ao transferir aplicações:', error);
            const error_message = error.message.toLowerCase();

            if (error_message.includes('não encontrado')) {
                return res.status(404).json({
                    status: 'error',
                    message: error.message
                });
            }

            res.status(500).json({
                status: 'error',
                message: error.message || 'Ocorreu um problema ao transferir as aplicações. Por favor, tente novamente mais tarde.'
            });
        }
    }
};

module.exports = userController; 