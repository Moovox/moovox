const animalService = require('../../services/animal');

const animalController = {
    async listarAnimais(req, res) {
        try {
            const farmId = req.user.farm_id;
            const animals = await animalService.getAllAnimals(farmId); 
            res.status(200).json({
                status: 'success',
                data: animals
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

    async buscarAnimalPorId(req, res) {
        try {
            const { id } = req.params;
            const farmId = req.user.farm_id;
            const animal = await animalService.getAnimalById(id, farmId);
            res.status(200).json({
                status: 'success',
                data: animal
            });
        } catch (error) {
            const error_message = error.message.toLowerCase();

            if(error_message.includes('não') && error_message.includes('encontrado')) {
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

    async criarAnimal(req, res) {
        try {
            const farmId = req.user.farm_id;
            const animalData = {
                ...req.body,
                farmId
            };
            const animal = await animalService.createAnimal(animalData);
            res.status(201).json({
                status: 'success',
                data: animal
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: 'Ocorreu um problema ao processar sua solicitação. Por favor, tente novamente mais tarde.'
            });
        }
    },

    async atualizarAnimal(req, res) {
        try {
            const { id } = req.params;
            const farmId = req.user.farm_id;
            
            // Verifica se o animal existe e pertence à fazenda do usuário
            await animalService.getAnimalById(id, farmId);
            
            const animal = await animalService.updateAnimal(id, req.body);
            res.status(200).json({
                status: 'success',
                data: animal
            });
        } catch (error) {
            const error_message = error.message.toLowerCase();

            if(error_message.includes('não') && error_message.includes('encontrado')) {
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

    async excluirAnimal(req, res) {
        try {
            const { id } = req.params;
            const farmId = req.user.farm_id;
            
            // Verifica se o animal existe e pertence à fazenda do usuário
            await animalService.getAnimalById(id, farmId);
            
            await animalService.deleteAnimal(id);
            res.status(204).send();
        } catch (error) {
            const error_message = error.message.toLowerCase();

            if(error_message.includes('não') && error_message.includes('encontrado')) {
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

    async getAnimalById(req, res) {
        try {
            const animal = await animalService.getAnimalById(req.params.id);
            res.status(200).json({
                status: 'success',
                data: animal
            });
        } catch (error) {
            const error_message = error.message.toLowerCase();

            if (error_message.includes('não encontrado')) {
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

    async createAnimal(req, res) {
        try {
            const animal = await animalService.createAnimal(req.body);
            res.status(201).json({
                status: 'success',
                data: animal
            });
        } catch (error) {
            res.status(500).json({
                status: 'error',
                message: 'Ocorreu um problema ao processar sua solicitação. Por favor, tente novamente mais tarde.'
            });
        }
    },

    async updateAnimal(req, res) {
        try {
            const animal = await animalService.updateAnimal(req.params.id, req.body);
            res.status(200).json({
                status: 'success',
                data: animal
            });
        } catch (error) {
            const error_message = error.message.toLowerCase();

            if (error_message.includes('não encontrado')) {
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

    async deleteAnimal(req, res) {
        try {
            await animalService.deleteAnimal(req.params.id);
            res.status(204).send();
        } catch (error) {
            const error_message = error.message.toLowerCase();

            if (error_message.includes('não encontrado')) {
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
    async getAnimalByID(req, res) {
        try {
            const { id } = req.params;
            const animal = await animalService.getAnimalByID(id);
            res.status(200).json({
                status: 'success',
                data: animal
            });
        } catch (error) {
            const error_message = error.message.toLowerCase();

            if (error_message.includes('não encontrado')) {
                return res.status(404).json({
                    status: 'error',
                    message: error.message
                });
            }

            res.status(500).json({
                status: 'error',
                message: 'Ocorreu um problema ao buscar o animal. Por favor, tente novamente mais tarde.'
            });
        }
    },
    async createAnimal(req, res) {
        try {
            const newAnimal = await animalService.createAnimal(req.body); 
            res.status(201).json({
                status: 'success', 
                data: newAnimal
            }); 
        } catch (error) {
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
                message: 'Ocorreu um problema ao criar o animal. Por favor, tente novamente mais tarde.'
            });
        }
    }, 
    async updateAnimal(req, res) {
        try {
            const { id } = req.params;
            const updatedAnimal = await animalService.updateAnimal(id, req.body);

            res.status(200).json({
                status: 'success',
                data: updatedAnimal
            });
        } catch (error) {
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
                message: 'Ocorreu um problema ao atualizar o animal. Por favor, tente novamente mais tarde.'
            });
        }
    }
}

module.exports = animalController; 