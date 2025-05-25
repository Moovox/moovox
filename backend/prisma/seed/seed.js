const prisma = require('../../src/config/database');
const { logError, logSuccess } = require('./utils');
const userSeeds = require('./users');
const breedSeeds = require('./breeds');
const animalsSeeds = require('./animals');
const farmSeed = require('./farm');
const speciesSeed = require('./species');
const vaccinesSeed = require('./vaccines');
const runSeedGroup = require('./utils/seedRunner');


async function runSeed() {
    try {
        await farmSeed();
        await speciesSeed();
        await runSeedGroup(userSeeds, "Usuários");
        await runSeedGroup(breedSeeds, "Raças");
        await runSeedGroup(animalsSeeds, "Animais");
        await runSeedGroup(vaccinesSeed, "Vacinas");


        logSuccess("Seed completa");
    } catch (error) {
        logError("runSeed", error)
    } finally {
        await prisma.$disconnect();
    }
}

runSeed()
.catch((err) => {
    console.error("❌ Erro ao executar seed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
