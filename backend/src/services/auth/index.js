const prisma = require('../../config/database');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET || "minhachaveultrasecreta123"


const authService = {
    async login(data) {
        try {
            const user = await prisma.users.findUnique({ 
                where: { email: data.email },
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
            
            const isPasswordValid = await bcrypt.compare(data.password, user.password);
            
            if (!isPasswordValid) {
                throw new Error("Email ou senha inválidos.");
            }
            
            const token = jwt.sign(
                { 
                    id: user.id, 
                    role: user.role,
                    farmId: user.farm.id 
                }, 
                JWT_SECRET, 
                { expiresIn: "1d" }
            );

            return { 
                token, 
                user: { 
                    id: user.id, 
                    email: user.email, 
                    role: user.role,
                    farmId: user.farm.id,
                    farmName: user.farm.name
                } 
            };
        } catch (error) {
            throw error;
        }
    }
}

module.exports = authService; 