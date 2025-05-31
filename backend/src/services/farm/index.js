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
    }
}

module.exports = farmService; 