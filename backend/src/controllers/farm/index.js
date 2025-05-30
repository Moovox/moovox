const farmService = require('../../services/farm');
const animalService = require('../../services/animal');
const userService = require('../../services/user');

const farmController = {
    async listarFazendas(req, res) {
        try {
            const farms = await farmService.getAllFarms();
            res.status(200).json({
                status: 'success',
                data: farms
            });
        } catch (error) {
            console.error('Erro ao listar fazendas:', error);
            
            res.status(500).json({
                status: 'error',
                message: 'Ocorreu um problema ao processar sua solicitação. Por favor, tente novamente mais tarde.'
            });
        }
    },
    
    async buscarFazendaPorId(req, res) {
        try {
            const { id } = req.params;
            const farm = await farmService.getFarmById(parseInt(id));
            
            res.status(200).json({
                status: 'success',
                data: farm
            });
        } catch (error) {
            console.error('Erro ao buscar fazenda:', error);
            
            const error_message = error.message.toLowerCase();
            if(error_message.includes('não') && error_message.includes('encontrada')) {
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
    
    async criarFazenda(req, res) {
        try {
            const farm = await farmService.createFarm(req.body);
            
            res.status(201).json({
                status: 'success',
                data: farm
            });
        } catch (error) {
            console.error('Erro ao criar fazenda:', error);
            
            if (error.message) {
                return res.status(400).json({
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
    
    async atualizarFazenda(req, res) {
        try {
            const { id } = req.params;
            const farm = await farmService.updateFarm(parseInt(id), req.body);
            
            res.status(200).json({
                status: 'success',
                data: farm
            });
        } catch (error) {
            console.error('Erro ao atualizar fazenda:', error);
            
            const error_message = error.message.toLowerCase();
            if(error_message.includes('não') && error_message.includes('encontrada')) {
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
    
    async excluirFazenda(req, res) {
        try {
            const { id } = req.params;
            await farmService.deleteFarm(parseInt(id));
            
            res.status(204).send();
        } catch (error) {
            console.error('Erro ao excluir fazenda:', error);
            
            const error_message = error.message.toLowerCase();
            if(error_message.includes('não') && error_message.includes('encontrada')) {
                return res.status(404).json({
                    status: 'error',
                    message: error.message
                });
            }
            
            if(error_message.includes('possui') && (error_message.includes('animais') || error_message.includes('usuários'))) {
                return res.status(400).json({
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
    
    async listarAnimaisPorFazenda(req, res) {
        try {
            const { id } = req.params;
            const farmId = parseInt(id);
            
            // Verificar permissão: usuário deve ser admin ou pertencer à fazenda
            if (req.user.role !== 'ADMIN' && req.user.farm_id !== farmId) {
                return res.status(403).json({
                    status: 'error',
                    message: 'Você não tem permissão para acessar os animais desta fazenda'
                });
            }
            
            const animals = await animalService.getAllAnimals(farmId);
            
            res.status(200).json({
                status: 'success',
                data: animals
            });
        } catch (error) {
            console.error('Erro ao listar animais da fazenda:', error);
            
            res.status(500).json({
                status: 'error',
                message: 'Ocorreu um problema ao processar sua solicitação. Por favor, tente novamente mais tarde.'
            });
        }
    },
    
    async listarUsuariosPorFazenda(req, res) {
        try {
            const { id } = req.params;
            const farmId = parseInt(id);
            
            // Verificar permissão: usuário deve ser admin ou pertencer à fazenda
            if (req.user.role !== 'ADMIN' && req.user.farm_id !== farmId) {
                return res.status(403).json({
                    status: 'error',
                    message: 'Você não tem permissão para acessar os usuários desta fazenda'
                });
            }
            
            const users = await userService.getUsersByFarm(farmId);
            
            res.status(200).json({
                status: 'success',
                data: users
            });
        } catch (error) {
            console.error('Erro ao listar usuários da fazenda:', error);
            
            res.status(500).json({
                status: 'error',
                message: 'Ocorreu um problema ao processar sua solicitação. Por favor, tente novamente mais tarde.'
            });
        }
    },
    
    async getEstatisticasFazenda(req, res) {
        try {
            const { id } = req.params;
            const farmId = parseInt(id);
            
            // Verificar permissão: usuário deve ser admin ou pertencer à fazenda
            if (req.user.role !== 'ADMIN' && req.user.farm_id !== farmId) {
                return res.status(403).json({
                    status: 'error',
                    message: 'Você não tem permissão para acessar as estatísticas desta fazenda'
                });
            }
            
            const stats = await farmService.getFarmStats(farmId);
            
            res.status(200).json({
                status: 'success',
                data: stats
            });
        } catch (error) {
            console.error('Erro ao obter estatísticas da fazenda:', error);
            
            const error_message = error.message.toLowerCase();
            if(error_message.includes('não') && error_message.includes('encontrada')) {
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
};

module.exports = farmController; 