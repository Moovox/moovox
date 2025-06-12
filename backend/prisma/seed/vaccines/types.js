const prisma = require("../../../src/config/database");
const { logError } = require("../utils");

async function createTypesOfVaccines() {
  try {
    const types = [
      {
        name: "Injectable",
        description: "Administered via subcutaneous or intramuscular injection",
        category: "Parenteral",
      },
      {
        name: "Oral",
        description: "Given through drinking water or oral administration",
        category: "Enteral",
      },
      {
        name: "Intranasal",
        description: "Applied directly to nasal passages",
        category: "Mucosal",
      },
      {
        name: "Transdermal",
        description:
          "Applied through the skin using patches or topical solutions",
        category: "Topical",
      },
      {
        name: "Intramammary",
        description:
          "Administered directly into mammary glands for dairy animals",
        category: "Specialized",
      },
      {
        name: "Spray",
        description: "Applied as aerosol or fine mist spray",
        category: "Topical",
      },
      {
        name: "Pour-on",
        description: "Applied as liquid poured along the back of the animal",
        category: "Topical",
      },
      {
        name: "Feed Additive",
        description: "Mixed with animal feed for oral consumption",
        category: "Enteral",
      },
    ];

    await prisma.types_of_Vaccines.createMany({
      data: types,
    });

    console.log(`     ✅ ${types.length} vaccine types created`);
  } catch (error) {
    logError("createTypesOfVaccines", error);
    throw error;
  }
}

module.exports = createTypesOfVaccines;
