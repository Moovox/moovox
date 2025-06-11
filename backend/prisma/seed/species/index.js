const prisma = require("../../../src/config/database");
const { logError } = require("../utils");

async function createSpecies() {
  try {
    const speciesData = [
      {
        name: "CATTLE",
        description:
          "Gado - Espécie de grande porte, geralmente criada para produção de carne, leite e trabalho. Possui comportamento de pastoreio e pode ser rastreada para monitoramento de saúde, movimentação e localização em áreas rurais.",
        average_lifespan: 15,
        gestation_period: 280,
      },
      {
        name: "SWINE",
        description:
          "Suíno - Espécie doméstica criada principalmente para produção de carne (porco). Possui comportamento onívoro e necessita de monitoramento para controle de ambiente e saúde, especialmente em granjas.",
        average_lifespan: 12,
        gestation_period: 114,
      },
      {
        name: "EQUINE",
        description:
          "Equino - Espécie usada para transporte, trabalho e atividades recreativas. Inclui cavalos e outros equídeos. Rastrear o equino ajuda no gerenciamento de pastagens, desempenho físico e localização em grandes áreas.",
        average_lifespan: 27,
        gestation_period: 330,
      },
      {
        name: "POULTRY",
        description:
          "Ave - Inclui galinhas, patos, perus e outras aves domésticas criadas para ovos e carne.",
        average_lifespan: 7,
        gestation_period: 21,
      },
      {
        name: "CAPRINE",
        description:
          "Caprino - Espécie resistente, usada para produção de leite, carne e fibra (como mohair). O rastreamento caprino auxilia na gestão de rebanhos em terrenos variados e no acompanhamento do comportamento alimentar e de saúde.",
        average_lifespan: 10,
        gestation_period: 150,
      },
      {
        name: "OVINE",
        description:
          "Ovino - Criada para produção de lã, carne e leite. São animais de pastagem que requerem monitoramento para garantir segurança, saúde e eficiência na utilização do espaço disponível.",
        average_lifespan: 10,
        gestation_period: 150,
      },
    ];

    await prisma.species.createMany({ data: speciesData });
    console.log(`   ✅ ${speciesData.length} espécies criadas`);
  } catch (error) {
    logError("createSpecies", error);
    throw error;
  }
}

module.exports = createSpecies;
