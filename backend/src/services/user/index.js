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

    async getUserByID(id) {
        try {
            const userId = parseInt(id, 10);
            if (isNaN(userId)) {
                throw new Error("ID de usuário inválido.");
            }

            const user = await prisma.users.findUnique({
                where: { id: userId },
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
                throw new Error("Usuário não encontrado.");
            }

            return {
                id: user.id,
                nome: user.name,
                email: user.email,
                tipo: traduzirTipo(user.role),
                fazenda: user.farm.name
            };
        } catch (error) {
            console.error("Erro ao buscar usuário por ID:", error);
            throw error;
        }
    },

    async createUser(userData) {
        try {
            const { name, email, password, role, farmId } = userData;

            // Validações básicas
            if (!name) throw new Error("Nome é obrigatório");
            if (!email) throw new Error("Email é obrigatório");
            if (!password) throw new Error("Senha é obrigatória");
            if (!role) throw new Error("Função do usuário é obrigatória");
            if (!farmId) throw new Error("ID da fazenda é obrigatório");

            const farmIdNum = parseInt(farmId, 10);
            if (isNaN(farmIdNum)) {
                throw new Error("ID de fazenda inválido");
            }

            // Verifica se o email já existe
            const existingUser = await prisma.users.findUnique({
                where: { email }
            });

            if (existingUser) {
                throw new Error("Já existe um usuário com este email.");
            }

            // Verifica se a fazenda existe
            const farm = await prisma.farms.findUnique({
                where: { id: farmIdNum }
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
                        connect: { id: farmIdNum }
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
            const userId = parseInt(id, 10);
            if (isNaN(userId)) {
                throw new Error("ID de usuário inválido.");
            }

            const { name, email, password, role, farmId } = userData;

            // Verifica se o usuário existe
            const existingUser = await prisma.users.findUnique({
                where: { id: userId }
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
            const updateData = {};
            
            if (name) updateData.name = name;
            if (email) updateData.email = email;
            if (role) updateData.role = role;
            
            // Se houver ID da fazenda, converte para número e verifica se existe
            if (farmId) {
                const farmIdNum = parseInt(farmId, 10);
                if (isNaN(farmIdNum)) {
                    throw new Error("ID de fazenda inválido");
                }
                
                const farm = await prisma.farms.findUnique({
                    where: { id: farmIdNum }
                });
                
                if (!farm) {
                    throw new Error("Fazenda não encontrada.");
                }
                
                updateData.farm = { connect: { id: farmIdNum } };
            }

            // Se houver nova senha, faz o hash
            if (password) {
                updateData.password = await hashPassword(password);
            }

            const updatedUser = await prisma.users.update({
                where: { id: userId },
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
            const userId = parseInt(id, 10);
            if (isNaN(userId)) {
                throw new Error("ID de usuário inválido.");
            }

            // Verifica se o usuário existe
            const user = await prisma.users.findUnique({
                where: { id: userId }
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
                where: { id: userId }
            });

            return true;
        } catch (error) {
            console.error("Erro ao excluir usuário:", error);
            throw error;
        }
    }
};

module.exports = userService;