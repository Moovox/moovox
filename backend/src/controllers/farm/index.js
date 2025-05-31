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
    }
}

module.exports = farmController; 