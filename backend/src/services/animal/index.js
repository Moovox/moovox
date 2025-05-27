const prisma = require('../../config/database'); 

const animalService = {
    async getAllAnimals() {
        try {
            const animals = await prisma.animals.findMany(); 

            if(!animals || animals.length === 0) {
                throw new Error("Nenhum animal encontrado."); 
            }

            return animals; 
        } catch (error) {
            console.error("Erro ao buscar animais", error); 
            throw error; 
        }
    }
}

module.exports = animalService;