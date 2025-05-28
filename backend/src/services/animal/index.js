const prisma = require('../../config/database');

const animalService = {
    async getAllAnimals() {
        try {
            const animals = await prisma.animals.findMany({
                include: {
                    species: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                    breed: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                    farm: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            });

            if (!animals || animals.length === 0) {
                throw new Error("Nenhum animal encontrado.");
            }

            return animals;
        } catch (error) {
            console.error("Erro ao buscar animais", error);
            throw error;
        }
    },

     async getAnimalByID(id) {
        try {
            const animal = await prisma.animals.findUnique({
                where: { id: Number(id) },
                include: {
                    species: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                    breed: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                    farm: {
                        select: {
                            id: true,
                            name: true,
                        },
                    },
                },
            });

            if (!animal) {
                throw new Error(`Animal com ID ${id} não encontrado.`);
            }

            return animal;
        } catch (error) {
            console.error(`Erro ao buscar animal com ID ${id}`, error);
            throw error;
        }
    }
}

module.exports = animalService;

