const prisma = require('../../config/database');
const VALID_ROLES = ['ADMIN', ' FARMHAND', 'FARMER', 'VETERINARY'];
const bcrypt = require('bcryptjs');
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
    },
    async createUser(data) {
        try {
            const requiredFields = ['name', 'email', 'password', 'role', 'farm_id'];
            for (const field of requiredFields) {
                if (data[field] === undefined || data[field] === null || data[field] === '') {
                    throw new Error(`O campo '${field}' é obrigatório.`);
                }
            }

            if (typeof data.name !== 'string' || data.name.trim().length === 0) {
                throw new Error("O campo 'name' deve ser uma string não vazia.")
            }

            if (typeof data.email !== 'string' || data.email.trim().length === 0) {
                throw new Error("O campo 'email' deve ser uma string não vazia.")
            }
            const existing_email = await prisma.users.findUnique({where: {email: data.email}});
            if(existing_email){
                throw new Error("E-mail inválido. Já cadastrado no sistema.");
                
            }

            if (typeof data.password !== 'string' || data.password.trim().length === 0) {
                throw new Error("O campo 'password  ' deve ser uma string não vazia.")
            }

            if (isNaN(Number(data.farm_id))) {
                throw new Error("O campo 'farm_id' deve ser um número.");
            }
            const role = data.role.toUpperCase();

            if (!VALID_ROLES.includes(role)) {
                throw new Error(`O campo 'role' deve ser um dos seguintes valores: ${VALID_ROLES.join(', ')}`);
            }

            const hashed_password = await bcrypt.hash(data.password, 10);

            const newUser = await prisma.users.create({
                data: {
                    name: data.name.trim(),
                    email: data.email.trim().toLowerCase(),
                    password: hashed_password,
                    role: role,
                    farm_id: Number(data.farm_id),
                },
            });
            return newUser;
        } catch (error) {
            console.error("Erro ao criar usuário", error);
            throw error;
        }
    }
}

module.exports = userService;