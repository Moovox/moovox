const animalService = require('../../services/animal'); 

const animalController = {
    async getAllAnimals(req,res) {
        try {
            const animals = await animalService.getAllAnimals(); 
            res.status(200).json({
                status: 'success', 
                data: animals
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
    }
}

module.exports = animalController; 