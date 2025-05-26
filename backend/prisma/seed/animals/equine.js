const { createAnimalsForEachBreedBySpecies } = require('../utils/animalHelpers');

async function createEquine() {
  await createAnimalsForEachBreedBySpecies("EQUINE");
}

module.exports = createEquine; 