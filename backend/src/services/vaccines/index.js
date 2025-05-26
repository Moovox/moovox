const prisma = require('../../config/database');
const {ensureNonEmpty} = require('../../utils/validators/services'); 
const {logErrorAndThrow} = require('../../utils/log/services/');

const vaccinesService = {
    async getAllVaccines() {
        try {
            const vaccines = await prisma.vaccines.findMany();
            ensureNonEmpty(vaccines, "Vacina")
            return vaccines;
        } catch (error) {
            logErrorAndThrow("Vacina", error); 

        }
    }
}

module.exports = vaccinesService; 