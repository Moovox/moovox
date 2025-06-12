const prisma = require("../../../src/config/database");
const { logError } = require("../utils");

async function createBreedsCattle() {
  try {
    const species = await prisma.species.findFirst({
      where: { name: "CATTLE" },
    });

    const breeds = [
      {
        name: "Angus",
        description:
          "British beef breed, highly valued for meat tenderness and marbling. Widely used in crossbreeding programs.",
        average_weight: 600.0,
        productivity: "beef",
      },
      {
        name: "Brahman",
        description:
          "Zebu breed originated in the USA (based on Nelore, Guzera and Gir), very heat resistant and used in crossbreeding for beef production.",
        average_weight: 550.0,
        productivity: "beef",
      },
      {
        name: "Nelore",
        description:
          "Zebu breed originally from India, well adapted to Brazilian tropical climate, predominant in beef cattle.",
        average_weight: 500.0,
        productivity: "beef",
      },
      {
        name: "Holstein",
        description:
          "Highly productive European breed, world leader in milk production, with black and white coloration.",
        average_weight: 600.0,
        productivity: "dairy",
      },
    ];

    await prisma.breeds.createMany({
      data: breeds.map((breed) => ({
        ...breed,
        species_id: species.id,
      })),
    });
  } catch (error) {
    logError("createBreedsCattle", error);
  }
}

module.exports = createBreedsCattle;
