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
    async getUserByID(id) {
        try {
            const user = await prisma.users.findUnique({
                where: { id: Number(id) },
                include: {
                    farm: {
                        select: {
                            id: true,
                            name: true
                        }
                    }
                }
            });
            if (!user) {
                throw new Error(`Usuário com ID ${id} não encontrado.`);
            }
            return user;
        } catch (error) {
            console.error(`Erro ao buscar usuário com ID ${id}`, error);
            throw error;

        }
    }
}

module.exports = userService;