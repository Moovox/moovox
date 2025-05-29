const prisma = require('../../config/database');

const animalService = {
    async getAllAnimals(farmId) {
        try {
            const animals = await prisma.animals.findMany({
                where: {
                    farm_id: farmId
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
                },
                orderBy: {
                    created_at: 'desc'
                }
            });

            if (!animals || animals.length === 0) {
                throw new Error("Nenhum animal encontrado.");
            }

            return animals.map(animal => ({
                id: animal.id,
                identificacao: `${animal.species.name.substring(0, 3).toUpperCase()}-${animal.id.toString().padStart(3, '0')}`,
                nome: animal.name,
                especie: animal.species.name.toLowerCase(),
                dataNascimento: animal.birth_date,
                peso: animal.weight,
                raca: animal.breed.name,
                status: animal.health_status
            }));
        } catch (error) {
            console.error("Erro ao buscar animais", error);
            throw error;
        }
    },

    async getAnimalById(id, farmId) {
        try {
            const animal = await prisma.animals.findFirst({
                where: {
                    id: parseInt(id),
                    farm_id: farmId
                },
                include: {
                    species: true,
                    breed: true
                }
            });

            if (!animal) {
                throw new Error("Animal não encontrado");
            }

            return {
                id: animal.id,
                identificacao: `${animal.species.name.substring(0, 3).toUpperCase()}-${animal.id.toString().padStart(3, '0')}`,
                nome: animal.name,
                especie: animal.species.name.toLowerCase(),
                dataNascimento: animal.birth_date,
                peso: animal.weight,
                raca: animal.breed.name,
                status: animal.health_status
            };
        } catch (error) {
            console.error("Erro ao buscar animal por ID", error);
            throw error;
        }
    },

    async createAnimal(data) {
        try {
            const animal = await prisma.animals.create({
                data: {
                    name: data.nome,
                    species_id: parseInt(data.especieId),
                    breed_id: parseInt(data.racaId),
                    birth_date: new Date(data.dataNascimento),
                    weight: parseFloat(data.peso),
                    health_status: data.status,
                    farm_id: data.farmId
                },
                include: {
                    species: true,
                    breed: true
                }
            });

            return {
                id: animal.id,
                identificacao: `${animal.species.name.substring(0, 3).toUpperCase()}-${animal.id.toString().padStart(3, '0')}`,
                nome: animal.name,
                especie: animal.species.name.toLowerCase(),
                dataNascimento: animal.birth_date,
                peso: animal.weight,
                raca: animal.breed.name,
                status: animal.health_status
            };
        } catch (error) {
            console.error("Erro ao criar animal", error);
            throw error;
        }
    },

    async updateAnimal(id, data) {
        try {
            const animal = await prisma.animals.update({
                where: {
                    id: parseInt(id)
                },
                data: {
                    name: data.nome,
                    species_id: parseInt(data.especieId),
                    breed_id: parseInt(data.racaId),
                    birth_date: new Date(data.dataNascimento),
                    weight: parseFloat(data.peso),
                    health_status: data.status
                },
                include: {
                    species: true,
                    breed: true
                }
            });

            return {
                id: animal.id,
                identificacao: `${animal.species.name.substring(0, 3).toUpperCase()}-${animal.id.toString().padStart(3, '0')}`,
                nome: animal.name,
                especie: animal.species.name.toLowerCase(),
                dataNascimento: animal.birth_date,
                peso: animal.weight,
                raca: animal.breed.name,
                status: animal.health_status
            };
        } catch (error) {
            console.error("Erro ao atualizar animal", error);
            throw error;
        }
    },

    async deleteAnimal(id) {
        try {
            await prisma.animals.delete({
                where: {
                    id: parseInt(id)
                }
            });
        } catch (error) {
            console.error("Erro ao excluir animal", error);
            throw error;
        }
    }
};

module.exports = animalService;

