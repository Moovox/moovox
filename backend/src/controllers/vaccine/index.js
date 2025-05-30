const vaccineService = require('../../services/vaccine');

const vaccineController = {
    async getAllVaccines(req, res) {
        try {
            const vaccines = await vaccineService.getAllVaccines();
            res.status(200).json({
                status: 'success',
                data: vaccines
            });
        } catch (error) {
            console.error("Erro apresentado:", error)
            const error_message = error.message.toLowerCase();

            if (error_message.includes('nenhuma') && error_message.includes('encontrada')) {
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
    async getVaccineByID(req, res) {
        try {
            const { id } = req.params;
            const vaccine = await vaccineService.getVaccineByID(id);
            res.status(200).json({
                status: 'success',
                data: vaccine
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
    async createVaccine(req, res) {
        try {
            const newVaccine = await vaccineService.createVaccine(req.body);
            res.status(201).json({
                status: 'success',
                data: newVaccine
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
    }
}



module.exports = vaccineController; 