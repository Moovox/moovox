const prisma = require("../../../src/config/database");
const createUser = require("./user");
const { logError } = require("../utils");

async function createVeterinarians() {
  try {
    // Get all farms to create one veterinarian per farm
    const farms = await prisma.farms.findMany({ select: { id: true } });

    for (const farm of farms) {
      const user = await createUser("VETERINARY");
      if (!user) {
        console.warn(`User with role VETERINARY was not created`);
        continue;
      }

      // Update the user to be specifically assigned to this farm
      await prisma.users.update({
        where: { id: user.id },
        data: { farm_id: farm.id },
      });

      await prisma.veterinarians.create({
        data: {
          user_id: user.id,
        },
      });
    }
  } catch (error) {
    logError("createVeterinarians", error);
  }
}

module.exports = createVeterinarians;
