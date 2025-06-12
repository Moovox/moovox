const prisma = require("../../../src/config/database");
const { logError } = require("../utils");

async function createBreedsEquine() {
  try {
    const species = await prisma.species.findFirst({
      where: { name: "EQUINE" },
    });

    const breeds = [
      {
        name: "Crioulo",
        description:
          "South American extremely resistant breed, ideal for rural work in inhospitable regions.",
        average_weight: 430,
        productivity: "Work",
      },
      {
        name: "Mangalarga Marchador",
        description:
          "Brazilian breed known for its comfortable gait and endurance. Ideal for long-distance rides.",
        average_weight: 450,
        productivity: "Riding and light work",
      },
      {
        name: "Quarter Horse",
        description:
          "North American breed very popular in Brazil, known for its strength and speed in short distances. Used in competitions and ranch work.",
        average_weight: 500,
        productivity: "Work, sports and riding",
      },
      {
        name: "Percheron",
        description:
          "French draft horse, very strong and docile. Used in heavy services such as transportation and plowing.",
        average_weight: 900,
        productivity: "Heavy draft",
      },
    ];

    await prisma.breeds.createMany({
      data: breeds.map((breed) => ({
        ...breed,
        species_id: species.id,
      })),
    });
  } catch (error) {
    logError("createBreedsEquine", error);
  }
}

module.exports = createBreedsEquine;
