const prisma = require('../../config/database');

const farmService = {
    async getAllFarms() {
        try {
            const farms = await prisma.farms.findMany({
                orderBy: {
                    name: 'asc'
                }
            });

            if (!farms) {
                return [];
            }

            return farms.map(farm => ({
                id: farm.id,
                name: farm.name,
                location: farm.location || '',
                size: farm.size || 0,
                description: farm.description || ''
            }));
        } catch (error) {
            console.error("Erro ao buscar fazendas:", error);
            throw error;
        }
    },

    async getFarmById(id) {
        try {
            const farm = await prisma.farms.findUnique({
                where: { id }
            });

            if (!farm) {
                throw new Error("Fazenda não encontrada.");
            }

            return {
                id: farm.id,
                name: farm.name,
                location: farm.location || '',
                size: farm.size || 0,
                description: farm.description || ''
            };
        } catch (error) {
            console.error(`Erro ao buscar fazenda com ID ${id}:`, error);
            throw error;
        }
    },

    async createFarm(data) {
        try {
            // Validações básicas
            if (!data.name) throw new Error("Nome da fazenda é obrigatório");

            const farm = await prisma.farms.create({
                data: {
                    name: data.name,
                    location: data.location || '',
                    size: data.size ? parseFloat(data.size) : 0,
                    description: data.description || ''
                }
            });

            return {
                id: farm.id,
                name: farm.name,
                location: farm.location || '',
                size: farm.size || 0,
                description: farm.description || ''
            };
        } catch (error) {
            console.error("Erro ao criar fazenda:", error);
            throw error;
        }
    },

    async updateFarm(id, data) {
        try {
            // Verifica se a fazenda existe
            const existingFarm = await prisma.farms.findUnique({
                where: { id }
            });

            if (!existingFarm) {
                throw new Error("Fazenda não encontrada.");
            }

            // Validações básicas
            if (!data.name) throw new Error("Nome da fazenda é obrigatório");

            const farm = await prisma.farms.update({
                where: { id },
                data: {
                    name: data.name,
                    location: data.location || '',
                    size: data.size ? parseFloat(data.size) : 0,
                    description: data.description || ''
                }
            });

            return {
                id: farm.id,
                name: farm.name,
                location: farm.location || '',
                size: farm.size || 0,
                description: farm.description || ''
            };
        } catch (error) {
            console.error(`Erro ao atualizar fazenda com ID ${id}:`, error);
            throw error;
        }
    },

    async deleteFarm(id) {
        try {
            // Verifica se a fazenda existe
            const existingFarm = await prisma.farms.findUnique({
                where: { id },
                include: {
                    animal: { select: { id: true }, take: 1 },
                    user: { select: { id: true }, take: 1 }
                }
            });

            if (!existingFarm) {
                throw new Error("Fazenda não encontrada.");
            }

            // Verifica se existem animais ou usuários vinculados à fazenda
            if (existingFarm.animal && existingFarm.animal.length > 0) {
                throw new Error("Não é possível excluir a fazenda pois existem animais vinculados a ela.");
            }

            if (existingFarm.user && existingFarm.user.length > 0) {
                throw new Error("Não é possível excluir a fazenda pois existem usuários vinculados a ela.");
            }

            await prisma.farms.delete({
                where: { id }
            });

            return true;
        } catch (error) {
            console.error(`Erro ao excluir fazenda com ID ${id}:`, error);
            throw error;
        }
    },

    async getFarmStats(farmId) {
        try {
            // Verifica se a fazenda existe
            const existingFarm = await prisma.farms.findUnique({
                where: { id: farmId }
            });

            if (!existingFarm) {
                throw new Error("Fazenda não encontrada.");
            }

            // Busca contagem de animais por espécie
            const animalsBySpecies = await prisma.$queryRaw`
                SELECT s.name as species, COUNT(a.id) as count
                FROM Animals a
                JOIN Species s ON a.species_id = s.id
                WHERE a.farm_id = ${farmId}
                GROUP BY s.name
            `;

            // Busca contagem de usuários por papel
            const usersByRole = await prisma.$queryRaw`
                SELECT role, COUNT(id) as count
                FROM Users
                WHERE farm_id = ${farmId}
                GROUP BY role
            `;

            // Obtém total de animais
            const totalAnimals = await prisma.animals.count({
                where: { farm_id: farmId }
            });

            // Obtém total de usuários
            const totalUsers = await prisma.users.count({
                where: { farm_id: farmId }
            });

            // Obtém dados de vacinação pendente
            const pendingVaccinations = await prisma.$queryRaw`
                SELECT COUNT(*) as count
                FROM Applications ap
                JOIN Animals a ON ap.animal_id = a.id
                WHERE a.farm_id = ${farmId}
                AND ap.status_vaccine_application = 'PENDING'
            `;

            return {
                farm: {
                    id: existingFarm.id,
                    name: existingFarm.name,
                    location: existingFarm.location || '',
                    size: existingFarm.size || 0,
                    description: existingFarm.description || ''
                },
                totalAnimals,
                totalUsers,
                animalsBySpecies: animalsBySpecies || [],
                usersByRole: usersByRole || [],
                pendingVaccinations: pendingVaccinations[0]?.count || 0
            };
        } catch (error) {
            console.error(`Erro ao obter estatísticas da fazenda com ID ${farmId}:`, error);
            throw error;
        }
    }
};

module.exports = farmService; 