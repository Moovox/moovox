const farmService = require('../../services/farm');

const farmController = {
    async getAllFarms(req, res) {
        try {
            const farms = await farmService.getAllFarms();
            res.status(200).json({
                status: 'success',
                data: farms
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
    async getFarmByID(req, res) {
        try {
            const { id } = req.params;
            const farm = await farmService.getFarmByID(id);
            res.status(200).json({
                status: 'success',
                data: farm
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
    async createFarm(req, res) {
        try {
            const newFarm = await farmService.createFarm(req.body);
            res.status(201).json({
                status: 'success',
                data: newFarm
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
    async updateFarm(req, res) {
        try {
            const { id } = req.params;
            const updatedFarm = await farmService.updateFarm(id, req.body);
            res.status(200).json({
                status: 'success',
                data: updatedFarm
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
    }
}

module.exports = farmController; 