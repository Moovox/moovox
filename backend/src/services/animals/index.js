const prisma = require('../../config/database'); 
const {ensureNonEmpty} = require('../../utils/validators/services');
const animalServices = {
    async getAllAnimals(){
        try {
            const animals = await prisma.animals.findMany();
            ensureNonEmpty(animals, "Animal")
            return animals;
        } catch (error) {
            logErrorAndThrow("Animal", error);
        }
    }
}

module.exports = animalServices; 
