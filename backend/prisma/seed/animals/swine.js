const { createAnimalsForEachBreedBySpecies } = require('../utils/animalHelpers');

async function createSwine() {
  await createAnimalsForEachBreedBySpecies("SWINE");
}

module.exports = createSwine; 