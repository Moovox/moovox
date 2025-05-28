const prisma = require('../../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || "minhachaveultrasecreta123";

const authService = {
    async login(data) {
        // Validação inicial
        if (!data.email || !data.password) {
            throw { 
                message: "Email e senha são obrigatórios",
                statusCode: 400
            };
        }

        const user = await prisma.users.findUnique({ 
            where: { email: data.email } 
        });
        
        if (!user) {
            throw { 
                message: "Credenciais inválidas", // Mensagem genérica por segurança
                statusCode: 401
            };
        }

        const isPasswordValid = await bcrypt.compare(data.password, user.password);
        if (!isPasswordValid) {
            throw {
                message: "Credenciais inválidas", // Mesma mensagem para ambos os casos
                statusCode: 401
            };
        }

        // Geração do token
        const token = jwt.sign(
            { 
                id: user.id, 
                role: user.role,
                email: user.email 
            }, 
            JWT_SECRET, 
            { expiresIn: "1d" }
        );

        // Remover a senha do objeto user
        const { password, ...userWithoutPassword } = user;

        return { 
            token, 
            user: userWithoutPassword 
        };
    }
}

module.exports = authService;