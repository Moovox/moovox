const applicationsService = require('../../services/vaccine_applications'); 

const applicationsController = {
    async getAllApplications(req,res) {
        try {
            const applications = await applicationsService.getAllApplications(); 
            res.status(200).json(applications);
        } catch (error) {
            const msg = error.message.toLowerCase()
            if (msg.includes("nenhum") && msg.includes("encontrado")) {
                return res.status(404).json({ message: error.message });
            }
            res.status(500).json({message: 'Não foi possível buscar aplicações no momento'});
            
        }
    }
}
module.exports = applicationsController;