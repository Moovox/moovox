const prisma = require("../../../src/config/database");
const {
  faker,
  findTypeOfVaccineByName,
  findManufacturerByName,
  logError,
} = require("../utils");

async function createVaccines() {
  try {
    const type = await findTypeOfVaccineByName("Injectable");
    const manufacturer = await findManufacturerByName("BioVac Brasil S.A");

    const vaccines = [
      {
        name: "Aftovac",
        target_disease: "Foot-and-mouth Disease",
        type_of_vaccine_id: type.id,
        manufacturer_id: manufacturer.id,
        batch: "AFT12345BR",
        expiration_date: faker.date.between({
          from: "2025-01-01T00:00:00.000Z",
          to: "2030-01-01T00:00:00.000Z",
        }),
        required_doses: 2,
        dosing_interval: 180,
        notes: "Recommended for cattle from 3 months of age.",
      },
      {
        name: "Clostrivet",
        target_disease: "Clostridiosis",
        type_of_vaccine_id: type.id,
        manufacturer_id: manufacturer.id,
        batch: "CLO99876CE",
        expiration_date: faker.date.between({
          from: "2025-01-01T00:00:00.000Z",
          to: "2030-01-01T00:00:00.000Z",
        }),
        required_doses: 2,
        dosing_interval: 90,
        notes:
          "Protects against 7 types of clostridiosis. Annual reapplication.",
      },
    ];

    await prisma.vaccines.createMany({
      data: vaccines,
    });

    console.log(`     ✅ ${vaccines.length} vaccines created`);
  } catch (error) {
    logError("createVaccines", error);
    throw error;
  }
}

module.exports = createVaccines;
