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
    }
}

module.exports = vaccineApplicationController; 