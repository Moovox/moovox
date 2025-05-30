const prisma = require('../../../src/config/database');
const { faker, logError } = require('../utils');

async function createFarm() {
  try {
    const farm = await prisma.farms.create({
      data: { 
        name: faker.company.name() 
      }
    });
    console.log(`✅ Fazenda criada: ${farm.name} (ID: ${farm.id})`);
    return farm;
  } catch (error) {
    logError("createFarm", error);
    return null;
  }
}

module.exports = createFarm;