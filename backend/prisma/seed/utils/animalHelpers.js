const prisma = require("../../../src/config/database");
const { logError, getFirstFarm, faker } = require("./index");

async function findSpeciesByName(name) {
  return await prisma.species.findFirst({
    where: { name },
    select: { id: true },
  });
}

async function findBreedByName(name) {
  return await prisma.breeds.findFirst({
    where: { name },
    select: { id: true },
  });
}

// Generate realistic animal names based on species
function generateAnimalName(speciesName, gender) {
  const names = {
    CATTLE: {
      male: [
        "Thor",
        "Touro",
        "Brutus",
        "Rex",
        "Zeus",
        "Apollo",
        "Titan",
        "Champion",
        "Hercules",
        "Maximus",
      ],
      female: [
        "Bella",
        "Luna",
        "Daisy",
        "Rosie",
        "Molly",
        "Estrela",
        "Princesa",
        "Dama",
        "Flor",
        "Esperança",
      ],
    },
    SWINE: {
      male: [
        "Porky",
        "Bacon",
        "Hamlet",
        "Peppa",
        "Wilbur",
        "Oinky",
        "Snorty",
        "Piglet",
        "Babe",
        "Napoleon",
      ],
      female: [
        "Penny",
        "Petunia",
        "Pinky",
        "Priscilla",
        "Pamela",
        "Poppy",
        "Pearl",
        "Piper",
        "Paisley",
        "Penny",
      ],
    },
    EQUINE: {
      male: [
        "Thunder",
        "Storm",
        "Spirit",
        "Blaze",
        "Mustang",
        "Stallion",
        "Ranger",
        "Knight",
        "Phoenix",
        "Maverick",
      ],
      female: [
        "Star",
        "Grace",
        "Beauty",
        "Angel",
        "Princess",
        "Lady",
        "Duchess",
        "Comet",
        "Mystic",
        "Velvet",
      ],
    },
    POULTRY: {
      male: [
        "Rooster",
        "Clucky",
        "Feathers",
        "Pecky",
        "Red",
        "Rudy",
        "Cock",
        "Comb",
        "Spur",
        "Crow",
      ],
      female: [
        "Henrietta",
        "Clementine",
        "Nugget",
        "Goldie",
        "Pepper",
        "Cinnamon",
        "Ginger",
        "Honey",
        "Ruby",
        "Pearl",
      ],
    },
    CAPRINE: {
      male: [
        "Billy",
        "Goat",
        "Rambo",
        "Buck",
        "Gruff",
        "Sage",
        "Finn",
        "Jasper",
        "Oakley",
        "Rusty",
      ],
      female: [
        "Nanny",
        "Clover",
        "Hazel",
        "Ivy",
        "Rosemary",
        "Sage",
        "Willow",
        "Poppy",
        "Daisy",
        "Lily",
      ],
    },
    OVINE: {
      male: [
        "Woolly",
        "Ramsey",
        "Baaxter",
        "Shep",
        "Cotton",
        "Cloud",
        "Fluffy",
        "Snowy",
        "Curly",
        "Lamb",
      ],
      female: [
        "Ewena",
        "Sheila",
        "Woolinda",
        "Babs",
        "Fleece",
        "Misty",
        "Snowy",
        "Cloudy",
        "Softy",
        "Puffy",
      ],
    },
  };

  const speciesNames = names[speciesName] || names.CATTLE;
  const genderNames = speciesNames[gender] || speciesNames.female;
  return genderNames[Math.floor(Math.random() * genderNames.length)];
}

// Generate realistic colors based on species
function generateAnimalColor(speciesName) {
  const colors = {
    CATTLE: [
      "Black",
      "Brown",
      "Red",
      "White",
      "Black & White",
      "Brown & White",
      "Red & White",
      "Tan",
      "Gray",
      "Brindle",
    ],
    SWINE: [
      "Pink",
      "Black",
      "White",
      "Brown",
      "Spotted",
      "Hampshire",
      "Yorkshire",
      "Duroc",
      "Landrace",
      "Pietrain",
    ],
    EQUINE: [
      "Bay",
      "Chestnut",
      "Black",
      "Gray",
      "Palomino",
      "Pinto",
      "Appaloosa",
      "Buckskin",
      "Dun",
      "Roan",
    ],
    POULTRY: [
      "White",
      "Brown",
      "Black",
      "Red",
      "Buff",
      "Silver",
      "Golden",
      "Barred",
      "Speckled",
      "Multicolor",
    ],
    CAPRINE: [
      "White",
      "Brown",
      "Black",
      "Tan",
      "Spotted",
      "Gray",
      "Cream",
      "Mixed",
      "Fawn",
      "Chocolate",
    ],
    OVINE: [
      "White",
      "Black",
      "Brown",
      "Gray",
      "Spotted",
      "Jacob",
      "Suffolk",
      "Merino",
      "Romney",
      "Leicester",
    ],
  };

  const speciesColors = colors[speciesName] || colors.CATTLE;
  return speciesColors[Math.floor(Math.random() * speciesColors.length)];
}

// Generate realistic health status with weighted distribution
function generateHealthStatus() {
  const statuses = [
    { status: "HEALTHY", weight: 70 },
    { status: "GOOD", weight: 20 },
    { status: "FAIR", weight: 8 },
    { status: "POOR", weight: 2 },
  ];

  const random = Math.random() * 100;
  let cumulative = 0;

  for (const item of statuses) {
    cumulative += item.weight;
    if (random <= cumulative) {
      return item.status;
    }
  }

  return "HEALTHY";
}

async function createAnimalsForEachBreedBySpecies(
  speciesName,
  animalsPerBreed = 5
) {
  try {
    const species = await findSpeciesByName(speciesName);
    if (!species) {
      throw new Error(`Species ${speciesName} not found`);
    }

    // Get all farms to distribute animals
    const farms = await prisma.farms.findMany({
      select: { id: true, name: true },
    });

    if (farms.length === 0) {
      throw new Error("No farms found");
    }

    const breeds = await prisma.breeds.findMany({
      where: { species_id: species.id },
      select: { id: true, name: true, average_weight: true },
    });

    if (breeds.length === 0) {
      console.log(`     ⚠️  No breeds found for species ${speciesName}`);
      return;
    }

    let totalAnimalsCreated = 0;
    let globalAnimalCounter = 1; // Counter for unique IDs

    // Create multiple animals for each breed
    for (const breed of breeds) {
      const animalsToCreate = [];

      for (let i = 0; i < animalsPerBreed; i++) {
        const gender = Math.random() > 0.5 ? "male" : "female";
        const name = generateAnimalName(speciesName, gender);
        const color = generateAnimalColor(speciesName);
        const healthStatus = generateHealthStatus();

        // Random farm assignment
        const randomFarm = farms[Math.floor(Math.random() * farms.length)];

        // Calculate age (1 month to 10 years)
        const ageInDays = Math.floor(Math.random() * (10 * 365)) + 30;
        const birthDate = new Date();
        birthDate.setDate(birthDate.getDate() - ageInDays);

        // Weight based on breed average with some variation
        const baseWeight = breed.average_weight || 400;
        const weightVariation = baseWeight * 0.3; // 30% variation
        const weight = Math.max(
          50,
          baseWeight + (Math.random() - 0.5) * 2 * weightVariation
        );

        // Generate unique identifiers
        const uniqueId = globalAnimalCounter.toString().padStart(6, "0");
        const tagNumber = `${speciesName.slice(0, 2)}${
          randomFarm.id
        }${uniqueId}`;
        const microchipId = `MC${Date.now()}${uniqueId}`;

        animalsToCreate.push({
          name: `${name}`,
          birth_date: birthDate,
          species_id: species.id,
          breed_id: breed.id,
          weight: Math.round(weight),
          health_status: healthStatus,
          gender: gender,
          color: color,
          tag_number: tagNumber,
          microchip_id: microchipId,
          farm_id: randomFarm.id,
          active: true,
        });

        globalAnimalCounter++;
      }

      // Create animals in batch
      await prisma.animals.createMany({
        data: animalsToCreate,
      });

      totalAnimalsCreated += animalsToCreate.length;
    }

    console.log(
      `     ✅ ${totalAnimalsCreated} ${speciesName.toLowerCase()} animals created`
    );
    return totalAnimalsCreated;
  } catch (error) {
    logError(`createAnimalsForEachBreedBySpecies(${speciesName})`, error);
    throw error;
  }
}

// Create sample locations for some animals
async function createSampleLocations() {
  try {
    const animals = await prisma.animals.findMany({
      take: 20, // Sample locations for first 20 animals
      select: {
        id: true,
        farm: { select: { latitude: true, longitude: true } },
      },
      where: { farm: { latitude: { not: null }, longitude: { not: null } } },
    });

    const locationsToCreate = [];

    for (const animal of animals) {
      // Create 3-5 location points for each animal
      const locationCount = Math.floor(Math.random() * 3) + 3;

      for (let i = 0; i < locationCount; i++) {
        const baseLatitude = animal.farm.latitude;
        const baseLongitude = animal.farm.longitude;

        // Add small random variation to simulate movement within farm
        const latVariation = (Math.random() - 0.5) * 0.01; // ~1km variation
        const lngVariation = (Math.random() - 0.5) * 0.01;

        const capturedAt = new Date();
        capturedAt.setHours(
          capturedAt.getHours() - Math.floor(Math.random() * 24 * 7)
        ); // Last week

        locationsToCreate.push({
          animal_id: animal.id,
          latitude: baseLatitude + latVariation,
          longitude: baseLongitude + lngVariation,
          altitude: Math.floor(Math.random() * 100) + 500, // 500-600m altitude
          accuracy: Math.floor(Math.random() * 10) + 2, // 2-12m accuracy
          captured_at: capturedAt,
          battery: Math.floor(Math.random() * 30) + 70, // 70-100% battery
          temperature: Math.floor(Math.random() * 15) + 20, // 20-35°C
          humidity: Math.floor(Math.random() * 40) + 40, // 40-80% humidity
        });
      }
    }

    if (locationsToCreate.length > 0) {
      await prisma.locations.createMany({
        data: locationsToCreate,
      });
      console.log(`   ✅ ${locationsToCreate.length} sample locations created`);
    }
  } catch (error) {
    logError("createSampleLocations", error);
  }
}

module.exports = {
  findSpeciesByName,
  findBreedByName,
  createAnimalsForEachBreedBySpecies,
  createSampleLocations,
};
