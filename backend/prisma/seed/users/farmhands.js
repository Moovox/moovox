const prisma = require('../../../src/config/database');
const createUser = require('../users/user');
const { logError } = require('../utils');

async function createFarmhands() {
    try {
        for (let i = 0; i < 3; i++) {
            const user = await createUser("FARMHAND");
            if (!user) continue;

            await prisma.farmhands.create({
                data: {
                    user_id: user.id,
                }
            })
        }
    } catch (error) {
        logError("createFarmhands", error);

    }
}

module.exports = createFarmhands; 