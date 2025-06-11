const prisma = require("../../src/config/database");
const { logError, logSuccess } = require("./utils");
const { createSampleLocations } = require("./utils/animalHelpers");
const userSeeds = require("./users");
const breedSeeds = require("./breeds");
const animalsSeeds = require("./animals");
const farmSeed = require("./farm");
const speciesSeed = require("./species");
const vaccinesSeed = require("./vaccines");
const runSeedGroup = require("./utils/seedRunner");

async function cleanDatabase() {
  try {
    console.log("🧹 Limpando banco de dados...");

    // Delete in correct order due to foreign key constraints
    await prisma.locations.deleteMany({});
    await prisma.applications.deleteMany({});
    await prisma.vaccines.deleteMany({});
    await prisma.types_of_Vaccines.deleteMany({});
    await prisma.manufacturers.deleteMany({});
    await prisma.animals.deleteMany({});
    await prisma.breeds.deleteMany({});
    await prisma.species.deleteMany({});
    await prisma.veterinarians.deleteMany({});
    await prisma.farmhands.deleteMany({});
    await prisma.users.deleteMany({});
    await prisma.farms.deleteMany({});

    console.log("✅ Banco de dados limpo");
  } catch (error) {
    logError("cleanDatabase", error);
    throw error;
  }
}

async function runSeed() {
  try {
    console.log("\n🌱 INICIANDO SEED DO BANCO DE DADOS\n" + "=".repeat(50));

    // Clean database first
    await cleanDatabase();

    // Seed data in correct order
    console.log("\n🏠 Criando fazendas...");
    await farmSeed();

    console.log("\n🐾 Criando espécies...");
    await speciesSeed();

    console.log("\n👥 Criando usuários...");
    await runSeedGroup(userSeeds, "Usuários");

    console.log("\n🧬 Criando raças...");
    await runSeedGroup(breedSeeds, "Raças");

    console.log("\n🐄 Criando animais...");
    await runSeedGroup(animalsSeeds, "Animais");

    console.log("\n💉 Criando vacinas e fabricantes...");
    await runSeedGroup(vaccinesSeed, "Vacinas e Fabricantes");

    console.log("\n📍 Criando localizações de exemplo...");
    await createSampleLocations();

    // Summary
    const farms = await prisma.farms.count();
    const users = await prisma.users.count();
    const species = await prisma.species.count();
    const breeds = await prisma.breeds.count();
    const animals = await prisma.animals.count();
    const vaccines = await prisma.vaccines.count();
    const manufacturers = await prisma.manufacturers.count();
    const locations = await prisma.locations.count();
    const applications = await prisma.applications.count();

    console.log("\n" + "=".repeat(50));
    console.log("📊 RESUMO DO SEED:");
    console.log("=".repeat(50));
    console.log(`🏠 Fazendas: ${farms}`);
    console.log(`👥 Usuários: ${users}`);
    console.log(`🐾 Espécies: ${species}`);
    console.log(`🧬 Raças: ${breeds}`);
    console.log(`🐄 Animais: ${animals}`);
    console.log(`💉 Vacinas: ${vaccines}`);
    console.log(`🏭 Fabricantes: ${manufacturers}`);
    console.log(`📍 Localizações: ${locations}`);
    console.log(`💊 Aplicações: ${applications}`);
    console.log("=".repeat(50));

    console.log("\n✅ SEED COMPLETA COM SUCESSO! 🎉\n");
  } catch (error) {
    console.error("\n❌ ERRO DURANTE O SEED:");
    logError("runSeed", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  runSeed()
    .catch((err) => {
      console.error("❌ Erro ao executar seed:", err.message);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

module.exports = runSeed;
