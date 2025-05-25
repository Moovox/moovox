const prisma = require('../../../src/config/database');
const createUser = require('./user');
const { logError } = require('../utils');

async function createVeterinarians() {
    try {
        for (let i = 0; i < 3; i++) {
            const user = await createUser("VETERINARY");
            if (!user) {
                console.warn(`Usuário com role ${role} não foi criado`); continue
            }

            await prisma.veterinarians.create({
                data: {
                    user_id: user.id
                },
            });
        };
    } catch (error) {
        logError("createVeterinarians", error)
    }
}

module.exports = createVeterinarians; 