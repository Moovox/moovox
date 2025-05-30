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

        // Criar cada animal individualmente para poder usar o connect
        for (const breed of breeds) {
            const animal = await prisma.animals.create({
                data: {
                    name: faker.animal.petName(),
                    birth_date: new Date(),
                    species_id: species.id,
                    breed_id: breed.id, 
                    weight: 100 + Math.floor(Math.random() * 50), 
                    health_status: "HEALTHY",
                    farm: {
                        connect: { id: farm.id }
                    }
                }
            });
        }

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