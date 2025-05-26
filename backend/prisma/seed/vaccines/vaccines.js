const prisma = require('../../../src/config/database');
const { faker, findTypeOfVaccineByName, findManufacturerByName, logError } = require('../utils');

async function createVaccines() {
  try {
    const type = await findTypeOfVaccineByName("Injectable");
    const manufacturer = await findManufacturerByName("BioVac Brasil S.A");

    const vaccines = [
      {
        name: "Aftovac",
        target_disease: "Febre Aftosa",
        type_of_vaccine_id: type.id,
        manufacturer_id: manufacturer.id,
        batch: "AFT12345BR",
        expiration_date: faker.date.between({
          from: "2025-01-01T00:00:00.000Z",
          to: "2030-01-01T00:00:00.000Z",
        }),
        required_doses: 2,
        dosing_interval: 180,
        notes: "Recomendada para bovinos a partir de 3 meses de idade.",
      },
      {
        name: "Clostrivet",
        target_disease: "Clostridioses",
        type_of_vaccine_id: type.id,
        manufacturer_id: manufacturer.id,
        batch: "CLO99876CE",
        expiration_date: faker.date.between({
          from: "2025-01-01T00:00:00.000Z",
          to: "2030-01-01T00:00:00.000Z",
        }),
        required_doses: 2,
        dosing_interval: 90,
        notes: "Protege contra 7 tipos de clostridioses. Reaplicação anual.",
      },
    ];

    await prisma.vaccines.createMany({
      data: vaccines,
    });

    console.log("✅ Vacinas criadas:", vaccines.map(v => v.name));
  } catch (error) {
    logError("createVaccines", error);
  }
}

module.exports = createVaccines;