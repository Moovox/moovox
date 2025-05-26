const { createAnimalsForEachBreedBySpecies } = require('../utils/animalHelpers');

async function createPoultry() {
  await createAnimalsForEachBreedBySpecies("POULTRY");
}

module.exports = createPoultry; 