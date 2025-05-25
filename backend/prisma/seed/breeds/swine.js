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
          "Raça belga altamente musculosa, conhecida por excelente rendimento de carne magra. Usada frequentemente em cruzamentos industriais.",
        average_weight: 280.0,
        productivity: "corte",
      },
      {
        name: "Landrace",
        description:
          "Raça originária da Dinamarca, famosa por sua alta fertilidade e produção de leite. Muito usada como matriz em cruzamentos industriais.",
        average_weight: 270.0,
        productivity: "matriz",
      },

      {
        name: "Large White",
        description:
          "Raça britânica com excelente desenvolvimento corporal e boa taxa de crescimento. Muito usada na produção de carne e como matriz.",
        average_weight: 300.0,
        productivity: "corte e matriz",
      },

      {
        name: "Duroc",
        description:
          "Raça americana conhecida pelo crescimento rápido, carne suculenta e rusticidade. Ideal para sistemas intensivos e cruzamentos.",
        average_weight: 310.0,
        productivity: "corte",
      },

      {
        name: "Moura",
        description:
          "Raça brasileira rústica e de crescimento lento, muito valorizada na produção de carne de qualidade em sistemas agroecológicos.",
        average_weight: 220.0,
        productivity: "corte e rusticidade",
      },

      {
        name: "Canastra",
        description:
          "Raça mineira de porco caipira, bem adaptada ao clima e manejo extensivo. Sua carne é bastante apreciada em produtos artesanais.",
        average_weight: 180.0,
        productivity: "carne e rusticidade",
      },

      {
        name: "Meishan",
        description:
          "Raça chinesa de suínos conhecida por sua alta prolificidade. Utilizada principalmente para melhoramento genético de matrizes.",
        average_weight: 200.0,
        productivity: "matriz",
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
