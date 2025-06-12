const prisma = require("../../../src/config/database");
const createUser = require("./user");
const { logError } = require("../utils");

async function createFarmer() {
  try {
    // Get all farms to create one farmer per farm
    const farms = await prisma.farms.findMany({ select: { id: true } });

    for (const farm of farms) {
      const user = await createUser("FARMER");
      // Update the user to be specifically assigned to this farm
      if (user) {
        await prisma.users.update({
          where: { id: user.id },
          data: { farm_id: farm.id },
        });
      }
    }
  } catch (error) {
    logError("createFarmer", error);
  }
}

module.exports = createFarmer;
