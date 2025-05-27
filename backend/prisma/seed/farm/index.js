const prisma = require('../../../src/config/database');
const { faker, logError } = require('../utils');

async function createFarm() {
  try {
    const farm = await prisma.farms.create({
      data: { name: faker.company.name() },
    });
    return farm;
  } catch (error) {
    logError("createFarm", error)
  }
}

module.exports = createFarm;