const vaccineApplicationService = require('../../services/vaccine_application'); 

const vaccineApplicationController = {
    async getAllVaccineApplications(req,res) {
        try {
            const vaccine_application = await vaccineApplicationService.getAllVaccineApplications(); 
            res.status(200).json({
                status: 'success', 
                data: vaccine_application
            }); 
        } catch (error) {
            console.error("Erro apresentado:", error)
            const error_message = error.message.toLowerCase();

            if(error_message.includes('nenhuma')&& error_message.includes('encontrada')) {
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
    async getVaccineApplicationByID(req, res) {
        try {
            const {id} = req.params
            const user = await vaccineApplicationService.getVaccineApplicationByID(id);
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
    }
}

module.exports = vaccineApplicationController; 