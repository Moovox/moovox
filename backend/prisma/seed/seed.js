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
    console.log("🧹 Cleaning database...");

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

    console.log("✅ Database cleaned");
  } catch (error) {
    logError("cleanDatabase", error);
    throw error;
  }
}

async function runSeed() {
  try {
    console.log("\n🌱 STARTING DATABASE SEED\n" + "=".repeat(50));

    // Clean database first
    await cleanDatabase();

    // Seed data in correct order
    console.log("\n🏠 Creating farms...");
    await farmSeed();

    console.log("\n🐾 Creating species...");
    await speciesSeed();

    console.log("\n👥 Creating users...");
    await runSeedGroup(userSeeds, "Users");

    console.log("\n🧬 Creating breeds...");
    await runSeedGroup(breedSeeds, "Breeds");

    console.log("\n🐄 Creating animals...");
    await runSeedGroup(animalsSeeds, "Animals");

    console.log("\n💉 Creating vaccines and manufacturers...");
    await runSeedGroup(vaccinesSeed, "Vaccines and Manufacturers");

    console.log("\n📍 Creating sample locations...");
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
    console.log("📊 SEED SUMMARY:");
    console.log("=".repeat(50));
    console.log(`🏠 Farms: ${farms}`);
    console.log(`👥 Users: ${users}`);
    console.log(`🐾 Species: ${species}`);
    console.log(`🧬 Breeds: ${breeds}`);
    console.log(`🐄 Animals: ${animals}`);
    console.log(`💉 Vaccines: ${vaccines}`);
    console.log(`🏭 Manufacturers: ${manufacturers}`);
    console.log(`📍 Locations: ${locations}`);
    console.log(`💊 Applications: ${applications}`);
    console.log("=".repeat(50));

    console.log("\n✅ SEED COMPLETED SUCCESSFULLY! 🎉\n");
  } catch (error) {
    console.error("\n❌ ERROR DURING SEED:");
    logError("runSeed", error);
    throw error;
  } finally {
    await prisma.$disconnect();
  }
}

if (require.main === module) {
  runSeed()
    .catch((err) => {
      console.error("❌ Error running seed:", err.message);
      process.exit(1);
    })
    .finally(async () => {
      await prisma.$disconnect();
    });
}

module.exports = runSeed;
