const prisma = require('../../config/database');

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
}

module.exports = userService;