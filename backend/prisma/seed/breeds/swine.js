const prisma = require("../../../src/config/database");
const { logError } = require("../utils");

async function createBreedsSwine() {
  try {
    const species = await prisma.species.findFirst({
      where: { name: "SWINE" },
    });

    const breeds = [
      {
        name: "Pietrain",
        description:
          "Belgian highly muscular breed, known for excellent lean meat yield. Frequently used in industrial crossbreeding.",
        average_weight: 280.0,
        productivity: "meat",
      },
      {
        name: "Landrace",
        description:
          "Breed originally from Denmark, famous for its high fertility and milk production. Widely used as breeding stock in industrial crossbreeding.",
        average_weight: 270.0,
        productivity: "breeding",
      },

      {
        name: "Large White",
        description:
          "British breed with excellent body development and good growth rate. Widely used in meat production and as breeding stock.",
        average_weight: 300.0,
        productivity: "meat and breeding",
      },

      {
        name: "Duroc",
        description:
          "American breed known for rapid growth, succulent meat and hardiness. Ideal for intensive systems and crossbreeding.",
        average_weight: 310.0,
        productivity: "meat",
      },

      {
        name: "Moura",
        description:
          "Brazilian rustic breed with slow growth, highly valued for quality meat production in agroecological systems.",
        average_weight: 220.0,
        productivity: "meat and hardiness",
      },

      {
        name: "Canastra",
        description:
          "Minas Gerais native pig breed, well adapted to climate and extensive management. Its meat is highly appreciated in artisanal products.",
        average_weight: 180.0,
        productivity: "meat and hardiness",
      },

      {
        name: "Meishan",
        description:
          "Chinese pig breed known for its high prolificacy. Used mainly for genetic improvement of breeding stock.",
        average_weight: 200.0,
        productivity: "breeding",
      },
    ];

    await prisma.breeds.createMany({
      data: breeds.map((breed) => ({
        ...breed,
        species_id: species.id,
      })),
    });
  } catch (error) {
    logError("createBreedsSwine", error);
  }
}

module.exports = createBreedsSwine;
