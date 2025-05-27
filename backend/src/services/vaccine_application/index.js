const prisma = require('../../config/database'); 

const vaccineApplicationService = {
    async getAllVaccineApplications() {
        try {
            const vaccine_applications = await prisma.applications.findMany(); 

            if(!vaccine_applications || vaccine_applications.length === 0) {
                throw new Error("Nenhuma aplicação de vacina encontrada."); 
            }

            return vaccine_applications; 
        } catch (error) {
            console.error("Erro ao buscar aplicações vacinas", error); 
            throw new Error(error.message); 
        }
    }
}

module.exports = vaccineApplicationService;