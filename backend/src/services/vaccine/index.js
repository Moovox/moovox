const prisma = require('../../config/database'); 

const vaccineService = {
    async getAllVaccines() {
        try {
            const vaccines = await prisma.vaccines.findMany(); 

            if(!vaccines || vaccines.length === 0) {
                throw new Error("Nenhuma vacina encontrada."); 
            }

            return vaccines; 
        } catch (error) {
            console.error("Erro ao buscar vacinas", error); 
            throw error; 
        }
    },

}

module.exports = vaccineService;