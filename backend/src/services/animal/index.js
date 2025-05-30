const prisma = require('../../config/database');

// Mapeamento de tradução de espécies
const traduzirEspecie = (especie) => {
    const traducoes = {
        'swine': 'suíno',
        'poultry': 'ave',
        'cattle': 'bovino',
        'sheep': 'ovino',
        'goat': 'caprino'
    };
    return traducoes[especie.toLowerCase()] || especie;
};

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
                return [];
            }

            return animals.map(animal => ({
                id: animal.id,
                identificacao: `${animal.species.name.substring(0, 3).toUpperCase()}-${animal.id.toString().padStart(3, '0')}`,
                nome: animal.name,
                especie: traduzirEspecie(animal.species.name),
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
                especie: traduzirEspecie(animal.species.name),
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
            console.log('Dados recebidos no service:', data);
            
            // Verificar se todos os campos necessários estão presentes
            if (!data.name) {
                throw new Error('O nome do animal é obrigatório');
            }
            if (!data.species_id) {
                throw new Error('A espécie do animal é obrigatória');
            }
            if (!data.breed_id) {
                throw new Error('A raça do animal é obrigatória');
            }
            if (!data.birth_date) {
                throw new Error('A data de nascimento é obrigatória');
            }
            if (!data.weight) {
                throw new Error('O peso do animal é obrigatório');
            }
            if (!data.health_status) {
                throw new Error('O status de saúde é obrigatório');
            }
            if (!data.farm_id) {
                throw new Error('O ID da fazenda é obrigatório');
            }
            
            // Verificar se a fazenda existe antes de tentar criar o animal
            const farmId = parseInt(data.farm_id);
            const farm = await prisma.farms.findUnique({
                where: { id: farmId }
            });
            
            if (!farm) {
                throw new Error(`A fazenda com ID ${farmId} não existe. Selecione uma fazenda válida.`);
            }
            
            const animal = await prisma.animals.create({
                data: {
                    name: data.name,
                    species_id: parseInt(data.species_id),
                    breed_id: parseInt(data.breed_id),
                    birth_date: new Date(data.birth_date),
                    weight: parseFloat(data.weight),
                    health_status: data.health_status,
                    farm_id: farmId
                },
                include: {
                    species: true,
                    breed: true
                }
            });

            console.log('Animal criado com sucesso:', animal);

            return {
                id: animal.id,
                identificacao: `${animal.species.name.substring(0, 3).toUpperCase()}-${animal.id.toString().padStart(3, '0')}`,
                nome: animal.name,
                especie: traduzirEspecie(animal.species.name),
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
            // Primeiro verifica se o animal existe e pertence à fazenda correta
            const existingAnimal = await prisma.animals.findFirst({
                where: {
                    id: parseInt(id),
                    farm_id: data.farmId
                }
            });

            if (!existingAnimal) {
                throw new Error("Animal não encontrado ou não pertence à fazenda especificada");
            }

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
                    health_status: data.status,
                    farm_id: data.farmId // Mantém o mesmo farmId
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
                especie: traduzirEspecie(animal.species.name),
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

