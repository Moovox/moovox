const prisma = require('../../config/database');
const VALID_HEALTH_STATUSES = ['HEALTHY', ' SICK', 'INJURED', 'RECOVERING'];

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
    },
    async createAnimal(data) {
        try {

            const requiredFields = ['name', 'species_id', 'breed_id', 'birth_date', 'weight', 'health_status', 'farm_id'];
            for (const field of requiredFields) {
                if (data[field] === undefined || data[field] === null || data[field] === '') {
                    throw new Error(`O campo '${field}' é obrigatório.`);
                }
            }

            if (typeof data.name !== 'string' || data.name.trim().length === 0) {
                throw new Error("O campo 'name' deve ser uma string não vazia.")
            }

            if (isNaN(Number(data.species_id))) {
                throw new Error("O campo 'species_id' deve ser um número.");
            }

            if (isNaN(Number(data.breed_id))) {
                throw new Error("O campo 'breed_id' deve ser um número.");
            }

            const birthDate = new Date(data.birth_date);

            if (isNaN(birthDate.getTime())) {
                throw new Error("O campo 'birth_date' deve ser uma data válida.");
            }
            if (birthDate > new Date()) {
                throw new Error("O campo 'birth_date' não pode ser uma data futura.");
            }

            if (typeof data.weight !== 'number' || data.weight <= 0) {
                throw new Error("O campo 'weight' deve ser um número positivo, do tipo Number.");
            }

            if (!VALID_HEALTH_STATUSES.includes(data.health_status)) {
                throw new Error(`O campo 'health_status' deve ser um dos seguintes valores: ${VALID_HEALTH_STATUSES.join(', ')}`);
            }

            if (isNaN(Number(data.farm_id))) {
                throw new Error("O campo 'farm_id' deve ser um número.");
            }
            const newAnimal = await prisma.animals.create({
                data: {
                    name: data.name.trim(),
                    species_id: Number(data.species_id),
                    breed_id: Number(data.breed_id),
                    birth_date: birthDate,
                    weight: data.weight,
                    health_status: data.health_status,
                    farm_id: Number(data.farm_id),
                },
            });

            return newAnimal;
        } catch (error) {
            console.error("Erro ao criar animal", error);
            throw error;
        }
    },
    async updateAnimal(id, data) {
        try {
            const existingAnimal = await prisma.animals.findUnique({
                where: { id: Number(id) },
            });

            if (!existingAnimal) {
                throw new Error(`Animal com ID ${id} não encontrado.`);
            }

            const updatableFields = ['name', 'species_id', 'breed_id', 'birth_date', 'weight', 'health_status', 'farm_id'];
            const updateData = {};

            for (const field of updatableFields) {
                if (data[field] !== undefined) {
                    switch (field) {
                        case 'name':
                            if (typeof data.name !== 'string' || data.name.trim().length === 0) {
                                throw new Error("O campo 'name' deve ser uma string não vazia.");
                            }
                            updateData.name = data.name.trim();
                            break;
                        case 'species_id':
                            if (isNaN(Number(data.species_id))) {
                                throw new Error("O campo 'species_id' deve ser um número.");
                            }
                            updateData.species_id = Number(data.species_id);
                            break;
                        case 'breed_id':
                            if (isNaN(Number(data.breed_id))) {
                                throw new Error("O campo 'breed_id' deve ser um número.");
                            }
                            updateData.breed_id = Number(data.breed_id);
                            break;
                        case 'birth_date':
                            const birthDate = new Date(data.birth_date);
                            if (isNaN(birthDate.getTime())) {
                                throw new Error("O campo 'birth_date' deve ser uma data válida.");
                            }
                            if (birthDate > new Date()) {
                                throw new Error("O campo 'birth_date' não pode ser uma data futura.");
                            }
                            updateData.birth_date = birthDate;
                            break;
                        case 'weight':
                            if (typeof data.weight !== 'number' || data.weight <= 0) {
                                throw new Error("O campo 'weight' deve ser um número positivo, do tipo Number.");
                            }
                            updateData.weight = data.weight;
                            break;
                        case 'health_status':
                            if (!VALID_HEALTH_STATUSES.includes(data.health_status)) {
                                throw new Error(`O campo 'health_status' deve ser um dos seguintes valores: ${VALID_HEALTH_STATUSES.join(', ')}`);
                            }
                            updateData.health_status = data.health_status;
                            break;
                        case 'farm_id':
                            if (isNaN(Number(data.farm_id))) {
                                throw new Error("O campo 'farm_id' deve ser um número.");
                            }
                            updateData.farm_id = Number(data.farm_id);
                            break;
                    }
                }
            }

            const updatedAnimal = await prisma.animals.update({
                where: { id: Number(id) },
                data: updateData,
            });

            return updatedAnimal;
        } catch (error) {
            console.error(`Erro ao atualizar animal com ID ${id}`, error);
            throw error;
        }
    },
    async deleteAnimal(id) {
        try {
            const existingAnimal = await prisma.animals.findUnique({
                where: { id: Number(id) },
            });

            if (!existingAnimal) {
                throw new Error(`Animal com ID ${id} não encontrado.`);
            }

            await prisma.animals.delete({
                where: { id: Number(id) },
            });

            return { message: `Animal com ID ${id} foi deletado com sucesso.` };
        } catch (error) {
            console.error(`Erro ao deletar animal com ID ${id}`, error);
            throw error;
        }
    }
};




module.exports = animalService;

