const prisma = require("../../../src/config/database");
const { faker, logError, logSuccess } = require("../utils");

async function createFarms() {
  try {
    const farmData = [
      {
        name: "Fazenda Santa Rosa",
        description:
          "Fazenda especializada na criação de gado leiteiro e de corte. Localizada na região central com pastagens naturais e infraestrutura moderna.",
        location: "São Paulo, SP - Brasil",
        size: 850.5,
        latitude: -23.5505,
        longitude: -46.6333,
        active: true,
      },
      {
        name: "Rancho Três Irmãos",
        description:
          "Tradicional fazenda familiar com foco na criação de bovinos de corte. Possui certificação orgânica e manejo sustentável.",
        location: "Minas Gerais, MG - Brasil",
        size: 1200.0,
        latitude: -19.9167,
        longitude: -43.9345,
        active: true,
      },
      {
        name: "Estância do Vale",
        description:
          "Fazenda diversificada com criação de gado, equinos e suínos. Oferece serviços de turismo rural e produção de laticínios.",
        location: "Rio Grande do Sul, RS - Brasil",
        size: 650.8,
        latitude: -30.0346,
        longitude: -51.2177,
        active: true,
      },
      {
        name: "Sítio Bela Vista",
        description:
          "Pequena propriedade rural com foco na criação de caprinos e ovinos. Produção artesanal de queijos e derivados.",
        location: "Goiás, GO - Brasil",
        size: 320.2,
        latitude: -16.6869,
        longitude: -49.2648,
        active: true,
      },
      {
        name: "Fazenda Esperança",
        description:
          "Fazenda moderna com tecnologia de precisão para monitoramento do gado. Especializada em melhoramento genético.",
        location: "Mato Grosso, MT - Brasil",
        size: 2150.7,
        latitude: -15.6014,
        longitude: -56.0979,
        active: true,
      },
    ];

    await prisma.farms.createMany({
      data: farmData,
    });

    console.log(`   ✅ ${farmData.length} fazendas criadas`);

    return farmData;
  } catch (error) {
    logError("createFarms", error);
    throw error;
  }
}

module.exports = createFarms;
