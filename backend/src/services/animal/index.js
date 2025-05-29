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

    async getAnimalById(id) {
        try {
            const animal = await prisma.animals.findUnique({
                where: { id: parseInt(id) },
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
                throw new Error("Animal não encontrado.");
            }

            return animal;
        } catch (error) {
            console.error("Erro ao buscar animal", error);
            throw error;
        }
    },

    async createAnimal(data) {
        try {
            const animal = await prisma.animals.create({
                data: {
                    name: data.name,
                    species_id: parseInt(data.species_id),
                    breed_id: parseInt(data.breed_id),
                    birth_date: new Date(data.birth_date),
                    weight: parseFloat(data.weight),
                    health_status: data.health_status,
                    farm_id: parseInt(data.farm_id)
                },
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

            return animal;
        } catch (error) {
            console.error("Erro ao criar animal", error);
            throw error;
        }
    },

    async updateAnimal(id, data) {
        try {
            const animal = await prisma.animals.update({
                where: { id: parseInt(id) },
                data: {
                    name: data.name,
                    species_id: parseInt(data.species_id),
                    breed_id: parseInt(data.breed_id),
                    birth_date: new Date(data.birth_date),
                    weight: parseFloat(data.weight),
                    health_status: data.health_status,
                    farm_id: parseInt(data.farm_id)
                },
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

            return animal;
        } catch (error) {
            console.error("Erro ao atualizar animal", error);
            throw error;
        }
    },

    async deleteAnimal(id) {
        try {
            await prisma.animals.delete({
                where: { id: parseInt(id) }
            });
        } catch (error) {
            console.error("Erro ao excluir animal", error);
            throw error;
        }
    }
};

module.exports = animalService;

