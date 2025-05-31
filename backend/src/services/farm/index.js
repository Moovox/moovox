const prisma = require('../../config/database');

const farmService = {
    async getAllFarms() {
        try {
            const farms = await prisma.farms.findMany({
                include: {
                    user: {
                        select: {
                            name: true,
                            role: true,
                        }
                    },
                    animal: {
                        select: {
                            name: true,
                            species: {
                                select: {
                                    name: true,
                                }
                            }
                        }
                    }
                }
            });
            if (!farms || farms.length === 0) {
                throw new Error("Nenhum usuário encontrado.");
            }

            return farms;
        } catch (error) {
            console.error("Erro ao buscar fazendas", error);
            throw error;
        }
    },
    async getFarmByID(id) {
        try {
            const farm = await prisma.farms.findUnique({
                where: { id: Number(id) },
                include: {
                    user: {
                        select: {
                            name: true,
                            role: true,
                        }
                    },
                    animal: {
                        select: {
                            name: true,
                            species: {
                                select: {
                                    name: true,
                                }
                            }
                        }
                    }
                }
            });
            if (!farm) {
                throw new Error(`Fazenda com ID ${id} não encontrado.`);
            }
            return farm;
        } catch (error) {
            console.error(`Erro ao buscar fazenda com ID ${id}`, error);
            throw error;

        }
    },
    async createFarm(data) {
        try {
            const requiredFields = ['name'];
            for (const field of requiredFields) {
                if (data[field] === undefined || data[field] === null || data[field] === '') {
                    throw new Error(`O campo '${field}' é obrigatório.`);
                }
            }

            if (typeof data.name !== 'string' || data.name.trim().length === 0) {
                throw new Error("O campo 'name' deve ser uma string não vazia.")
            }
            const newFarm = await prisma.farms.create({
                data: {
                    name: data.name.trim(),
                }
            });

            return newFarm;
        } catch (error) {
            console.error("Erro ao criar fazenda", error);
            throw error;
        }
    }
}

module.exports = farmService; 