const prisma = require('../../config/database');
const { hashPassword } = require('../../utils/auth');

const traduzirTipo = (tipo) => {
    const traducoes = {
        'ADMIN': 'Administrador',
        'FARMER': 'Fazendeiro',
        'FARMHAND': 'Funcionário',
        'VETERINARY': 'Veterinário'
    };
    return traducoes[tipo] || tipo;
};

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

            return users.map(user => ({
                id: user.id,
                nome: user.name,
                email: user.email,
                tipo: traduzirTipo(user.role),
                fazenda: user.farm.name
            }));
        } catch (error) {
            console.error("Erro ao buscar usuários", error);
            throw error;
        }
    },

    async createUser(userData) {
        try {
            const { name, email, password, role, farmId } = userData;

            // Verifica se o email já existe
            const existingUser = await prisma.users.findUnique({
                where: { email }
            });

            if (existingUser) {
                throw new Error("Já existe um usuário com este email.");
            }

            // Verifica se a fazenda existe
            const farm = await prisma.farms.findUnique({
                where: { id: farmId }
            });

            if (!farm) {
                throw new Error("Fazenda não encontrada.");
            }

            const hashedPassword = await hashPassword(password);

            const user = await prisma.users.create({
                data: {
                    name,
                    email,
                    password: hashedPassword,
                    role,
                    farm: {
                        connect: { id: farmId }
                    }
                },
                include: {
                    farm: {
                        select: {
                            name: true
                        }
                    }
                }
            });

            return {
                id: user.id,
                nome: user.name,
                email: user.email,
                tipo: traduzirTipo(user.role),
                fazenda: user.farm.name
            };
        } catch (error) {
            console.error("Erro ao criar usuário:", error);
            throw error;
        }
    },

    async updateUser(id, userData) {
        try {
            const { name, email, password, role, farmId } = userData;

            // Verifica se o usuário existe
            const existingUser = await prisma.users.findUnique({
                where: { id }
            });

            if (!existingUser) {
                throw new Error("Usuário não encontrado.");
            }

            // Se estiver atualizando o email, verifica se já não existe
            if (email && email !== existingUser.email) {
                const emailExists = await prisma.users.findUnique({
                    where: { email }
                });

                if (emailExists) {
                    throw new Error("Este email já está em uso.");
                }
            }

            // Prepara os dados para atualização
            const updateData = {
                ...(name && { name }),
                ...(email && { email }),
                ...(role && { role }),
                ...(farmId && {
                    farm: {
                        connect: { id: farmId }
                    }
                })
            };

            // Se houver nova senha, faz o hash
            if (password) {
                updateData.password = await hashPassword(password);
            }

            const updatedUser = await prisma.users.update({
                where: { id },
                data: updateData,
                include: {
                    farm: {
                        select: {
                            name: true
                        }
                    }
                }
            });

            return {
                id: updatedUser.id,
                nome: updatedUser.name,
                email: updatedUser.email,
                tipo: traduzirTipo(updatedUser.role),
                fazenda: updatedUser.farm.name
            };
        } catch (error) {
            console.error("Erro ao atualizar usuário:", error);
            throw error;
        }
    },

    async deleteUser(id) {
        try {
            // Verifica se o usuário existe
            const user = await prisma.users.findUnique({
                where: { id: Number(id) }
            });

            if (!user) {
                throw new Error("Usuário não encontrado.");
            }

            // Não permite deletar o último administrador
            if (user.role === 'ADMIN') {
                const adminCount = await prisma.users.count({
                    where: { role: 'ADMIN' }
                });

                if (adminCount <= 1) {
                    throw new Error("Não é possível excluir o último administrador do sistema.");
                }
            }

            await prisma.users.delete({
                where: { id }
            });

            return true;
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
            throw error;
        }
    }
}

module.exports = userService;