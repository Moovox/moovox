const prisma = require('../../../src/config/database'); 
const {logError, getFirstFarm, faker} = require('./index'); 
async function findSpeciesByName(name){
  return await prisma.species.findFirst({
    where: {name}, 
    select: {id: true}
  });
}

async function findBreedByName(name){
  return await prisma.breeds.findFirst({
    where: {name},
    select: {id: true}
  })
}



async function createAnimalsForEachBreedBySpecies(speciesName){
    try {
        const species = await findSpeciesByName(speciesName);
        const farm = await getFirstFarm(); 

        const breeds = await prisma.breeds.findMany({
            where: {species_id: species.id},
            select: {id: true, name: true}
        });

        const animalsData = breeds.map((breed, index) => ({
            name: faker.animal.petName(),
            birth_date: new Date(),
            species_id: species.id,
            breed_id: breed.id, 
            weight: 100 + index * 10, 
            health_status: "HEALTHY",
            farm_id: farm.id
        }));

        await prisma.animals.createMany({data: animalsData});

        console.log(`✅ Animals created for species ${speciesName}:`, breeds.map(b => b.name));

    } catch (error) {
        logError(`createAnimalsForEachBreedBySpecies(${speciesName})`, error);

    }
}


module.exports = {
  findSpeciesByName,
  findBreedByName,
  createAnimalsForEachBreedBySpecies
}