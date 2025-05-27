const prisma = require('../../config/database');

const userService = {
    async getAllUsers() {
        try {
            const users = await prisma.users.findMany({
                include: {
                    farm: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            });

            if (!users || users.length === 0) {
                throw new Error("Nenhum usuário encontrado.");
            }

            return users;
        } catch (error) {
            console.error("Erro ao buscar usuários", error);
            throw error;
        }
    },
}

module.exports = userService;