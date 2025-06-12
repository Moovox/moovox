const prisma = require("../../../src/config/database");
const { logError } = require("../utils");

async function createSpecies() {
  try {
    const speciesData = [
      {
        name: "CATTLE",
        description:
          "Cattle - Large species, generally raised for meat, milk and work production. Has grazing behavior and can be tracked for health monitoring, movement and location in rural areas.",
        average_lifespan: 15,
        gestation_period: 280,
      },
      {
        name: "SWINE",
        description:
          "Swine - Domestic species raised primarily for meat production (pork). Has omnivorous behavior and requires monitoring for environment and health control, especially in farms.",
        average_lifespan: 12,
        gestation_period: 114,
      },
      {
        name: "EQUINE",
        description:
          "Equine - Species used for transportation, work and recreational activities. Includes horses and other equids. Tracking equines helps in pasture management, physical performance and location in large areas.",
        average_lifespan: 27,
        gestation_period: 330,
      },
      {
        name: "POULTRY",
        description:
          "Poultry - Includes chickens, ducks, turkeys and other domestic birds raised for eggs and meat.",
        average_lifespan: 7,
        gestation_period: 21,
      },
      {
        name: "CAPRINE",
        description:
          "Caprine - Resistant species, used for milk, meat and fiber production (such as mohair). Caprine tracking assists in herd management on varied terrain and monitoring feeding and health behavior.",
        average_lifespan: 10,
        gestation_period: 150,
      },
      {
        name: "OVINE",
        description:
          "Ovine - Raised for wool, meat and milk production. They are grazing animals that require monitoring to ensure safety, health and efficiency in the use of available space.",
        average_lifespan: 10,
        gestation_period: 150,
      },
    ];

    await prisma.species.createMany({ data: speciesData });
    console.log(`   ✅ ${speciesData.length} species created`);
  } catch (error) {
    logError("createSpecies", error);
    throw error;
  }
}

module.exports = createSpecies;
