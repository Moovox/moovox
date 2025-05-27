const { createAnimalsForEachBreedBySpecies } = require('../utils/animalHelpers');

async function createCattle() {
  await createAnimalsForEachBreedBySpecies("CATTLE");
}

module.exports = createCattle; 