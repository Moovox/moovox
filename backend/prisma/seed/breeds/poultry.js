const prisma = require("../../../src/config/database");
const { logError } = require("../utils");

async function createBreedsPoultry() {
  try {
    const species = await prisma.species.findFirst({
      where: { name: "POULTRY" },
    });

    const breeds = [
      {
        name: "Leghorn",
        description:
          "Italian chicken breed widely used in commercial egg production, known for its high laying capacity.",
        average_weight: 2.3,
        productivity: "eggs",
      },
      {
        name: "Rhode Island Red",
        description:
          "Very popular American breed, known for its hardiness and good production of brown eggs.",
        average_weight: 3.0,
        productivity: "eggs",
      },

      {
        name: "Plymouth Rock",
        description:
          "Versatile dual-purpose breed, excellent for both meat and egg production. Very docile and easy to raise.",
        average_weight: 3.4,
        productivity: "dual-purpose",
      },

      {
        name: "Sussex",
        description:
          "British chicken with fast growth and good laying capacity. Produces large eggs and has good quality meat.",
        average_weight: 3.2,
        productivity: "dual-purpose",
      },

      {
        name: "Cornish",
        description:
          "English breed specialized in meat production. Genetic base of commercial broiler chickens.",
        average_weight: 4.5,
        productivity: "meat",
      },

      {
        name: "Australorp",
        description:
          "Australian breed famous for breaking laying records. Widely used for egg production in alternative systems.",
        average_weight: 3.1,
        productivity: "eggs",
      },

      {
        name: "Free-Range (Commercial Lines)",
        description:
          "Line developed in Brazil for alternative systems, with good hardiness and utilization for both meat and eggs.",
        average_weight: 2.8,
        productivity: "dual-purpose",
      },
    ];

    await prisma.breeds.createMany({
      data: breeds.map((breed) => ({
        ...breed,
        species_id: species.id,
      })),
    });
  } catch (error) {
    logError("createBreedsPoultry", error);
  }
}

module.exports = createBreedsPoultry;
