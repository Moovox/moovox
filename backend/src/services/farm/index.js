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
    }
}

module.exports = farmService; 