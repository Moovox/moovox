const prisma = require("../../../src/config/database");
const createUser = require("../users/user");
const { logError } = require("../utils");

async function createFarmhands() {
  try {
    // Get all farms to create farmhands for each
    const farms = await prisma.farms.findMany({ select: { id: true } });

    for (const farm of farms) {
      // Create 2-3 farmhands per farm
      const farmhandsCount = Math.floor(Math.random() * 2) + 2; // 2 or 3 farmhands

      for (let i = 0; i < farmhandsCount; i++) {
        const user = await createUser("FARMHAND");
        if (!user) continue;

        // Update the user to be specifically assigned to this farm
        await prisma.users.update({
          where: { id: user.id },
          data: { farm_id: farm.id },
        });

        await prisma.farmhands.create({
          data: {
            user_id: user.id,
          },
        });
      }
    }
  } catch (error) {
    logError("createFarmhands", error);
  }
}

module.exports = createFarmhands;
