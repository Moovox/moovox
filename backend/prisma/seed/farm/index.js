const prisma = require("../../../src/config/database");
const { faker, logError, logSuccess } = require("../utils");

async function createFarms() {
  try {
    const farmData = [
      {
        name: "Santa Rosa Farm",
        description:
          "Farm specialized in dairy and beef cattle breeding. Located in the central region with natural pastures and modern infrastructure.",
        location: "São Paulo, SP - Brazil",
        size: 850.5,
        latitude: -23.5505,
        longitude: -46.6333,
        active: true,
      },
      {
        name: "Three Brothers Ranch",
        description:
          "Traditional family farm focused on beef cattle breeding. Has organic certification and sustainable management.",
        location: "Minas Gerais, MG - Brazil",
        size: 1200.0,
        latitude: -19.9167,
        longitude: -43.9345,
        active: true,
      },
      {
        name: "Valley Ranch",
        description:
          "Diversified farm with cattle, equine and swine breeding. Offers rural tourism services and dairy production.",
        location: "Rio Grande do Sul, RS - Brazil",
        size: 650.8,
        latitude: -30.0346,
        longitude: -51.2177,
        active: true,
      },
      {
        name: "Beautiful View Farm",
        description:
          "Small rural property focused on caprine and ovine breeding. Artisanal production of cheeses and derivatives.",
        location: "Goiás, GO - Brazil",
        size: 320.2,
        latitude: -16.6869,
        longitude: -49.2648,
        active: true,
      },
      {
        name: "Hope Farm",
        description:
          "Modern farm with precision technology for cattle monitoring. Specialized in genetic improvement.",
        location: "Mato Grosso, MT - Brazil",
        size: 2150.7,
        latitude: -15.6014,
        longitude: -56.0979,
        active: true,
      },
    ];

    await prisma.farms.createMany({
      data: farmData,
    });

    console.log(`   ✅ ${farmData.length} farms created`);

    return farmData;
  } catch (error) {
    logError("createFarms", error);
    throw error;
  }
}

module.exports = createFarms;
