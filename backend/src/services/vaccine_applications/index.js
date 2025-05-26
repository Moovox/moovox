const prisma = require('../../config/database');
const {ensureNonEmpty} = require('../../utils/validators/services'); 
const {logErrorAndThrow} = require('../../utils/log/services/');

const applicationsService = {
    async getAllApplications() {
        try {
            const applications = await prisma.applications.findMany();
            ensureNonEmpty(applications, "Aplicação");
            return applications;
        } catch (error) {
            logErrorAndThrow("Aplicações", error); 

        }
    }
}

module.exports = applicationsService; 