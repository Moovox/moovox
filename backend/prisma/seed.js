const prisma = require("../src/config/database");
const { fakerPT_BR } = require("@faker-js/faker");
const faker = fakerPT_BR;
const bcrypt = require("bcryptjs");

async function createFarm() {
  try {
    const farm = await prisma.farms.create({
      data: { name: faker.company.name() },
    });
    return farm;
  } catch (error) {
    console.log("Erro ao criar fazenda: " + error);
  }
}

async function createUserFarmhands() {
  try {
    const createdFarmhands = [];
    const farm = await prisma.farms.findFirst({ select: { id: true } });
    if (!farm) throw new Error("Nenhuma fazenda encontrada.");

    for (let i = 0; i < 3; i++) {
      const name = faker.person.fullName();
      const email = `${name.replace(/\s+/g, "").toLowerCase()}@moovox.com`;
      const user = await prisma.users.create({
        data: {
          name: name,
          email: email,
          password: bcrypt.hashSync("123456", 10),
          role: "FARMHAND",
          farm: {
            connect: {
              id: farm.id,
            },
          },
        },
      });
      createdFarmhands.push(user);

      const farmhands = await prisma.farmhands.create({
        data: {
          user_id: user.id,
        },
      });
    }
    return createdFarmhands;
  } catch (error) {
    console.log("Erro ao criar funcionário da fazenda: " + error);
  }
}

async function createUserVeterinarians() {
  try {
    const createdVeterinarians = [];
    const farm = await prisma.farms.findFirst({ select: { id: true } });
    if (!farm) throw new Error("Nenhuma fazenda encontrada.");

    for (let i = 0; i < 3; i++) {
      const name = faker.person.fullName();
      const email = `${name.replace(/\s+/g, "").toLowerCase()}@moovox.com`;
      const user = await prisma.users.create({
        data: {
          name: name,
          email: email,
          password: bcrypt.hashSync("123456", 10),
          role: "VETERINARY",
          farm: {
            connect: {
              id: farm.id,
            },
          },
        },
      });
      createdVeterinarians.push(user);

      const veterinary = await prisma.veterinarians.create({
        data: {
          user_id: user.id,
        },
      });
    }
    return createdVeterinarians;
  } catch (error) {
    console.log("Erro ao criar veterinarios " + error);
  }
}

async function createUserFarmer() {
  try {
    const farm = await prisma.farms.findFirst({ select: { id: true } });

    if (!farm) throw new Error("Nenhuma fazenda encontrada.");

    const name = faker.person.fullName();
    const email = `${name.replace(/\s+/g, "").toLowerCase()}@moovox.com`;
    const user = await prisma.users.create({
      data: {
        name: name,
        email: email,
        password: bcrypt.hashSync("123456", 10),
        role: "FARMER",
        farm: {
          connect: {
            id: farm.id,
          },
        },
      },
    });
  } catch (error) {
    console.log("Erro ao criar veterinarios " + error);
  }
}

async function createSpecies() {
  try {
    const cattle = await prisma.species.create({
      data: {
        name: "CATTLE",
        description:
          "Gado - Espécie de grande porte, geralmente criada para produção de carne, leite e trabalho. Possui comportamento de pastoreio e pode ser rastreada para monitoramento de saúde, movimentação e localização em áreas rurais.",
        average_lifespan: 15,
        gestation_period: 280,
      },
    });
    const swine = await prisma.species.create({
      data: {
        name: "SWINE",
        description:
          "Suíno - Espécie doméstica criada principalmente para produção de carne (porco). Possui comportamento onívoro e necessita de monitoramento para controle de ambiente e saúde, especialmente em granjas.",
        average_lifespan: 12,
        gestation_period: 114,
      },
    });
    const equine = await prisma.species.create({
      data: {
        name: "EQUINE",
        description:
          "Equino - Espécie usada para transporte, trabalho e atividades recreativas. Inclui cavalos e outros equídeos. Rastrear o equino ajuda no gerenciamento de pastagens, desempenho físico e localização em grandes áreas.",
        average_lifespan: 27,
        gestation_period: 330,
      },
    });
    const poultry = await prisma.species.create({
      data: {
        name: "POULTRY",
        description:
          "Ave - Inclui galinhas, patos, perus e outras aves domésticas criadas para ovos e carne.",
        average_lifespan: 7,
        gestation_period: 21,
      },
    });
    const caprine = await prisma.species.create({
      data: {
        name: "CAPRINE",
        description:
          "Caprino - Espécie resistente, usada para produção de leite, carne e fibra (como mohair). O rastreamento caprino auxilia na gestão de rebanhos em terrenos variados e no acompanhamento do comportamento alimentar e de saúde.",
        average_lifespan: 10,
        gestation_period: 150,
      },
    });
    const ovine = await prisma.species.create({
      data: {
        name: "OVINE",
        description:
          "Ovino - Criada para produção de lã, carne e leite. São animais de pastagem que requerem monitoramento para garantir segurança, saúde e eficiência na utilização do espaço disponível.",
        average_lifespan: 10,
        gestation_period: 150,
      },
    });
  } catch (error) {
    console.log("Erro ao criar espécies: ", error);
  }
}

async function createBreedsCattle() {
  const cattle = await prisma.species.findFirst({
    where: {
      name: "CATTLE",
    },
    select: {
      id: true,
    },
  });

  try {
    const angus = await prisma.breeds.create({
      data: {
        name: "Angus",
        description:
          "Raça britânica de corte, muito valorizada pela maciez e marmorização da carne. Muito usada em cruzamentos.",
        average_weight: 600.0,
        productivity: "corte",
        species: { connect: { id: cattle.id } },
      },
    });
    const brahman = await prisma.breeds.create({
      data: {
        name: "Brahman",
        description:
          "Raça zebuína originária dos EUA (baseada no Nelore, Guzerá e Gir), muito resistente ao calor e usada em cruzamentos para corte.",
        average_weight: 550.0,
        productivity: "corte",
        species: { connect: { id: cattle.id } },
      },
    });
    const nelore = await prisma.breeds.create({
      data: {
        name: "Nelore",
        description:
          "Raça zebuína originária da Índia, muito adaptada ao clima tropical brasileiro, predominante na pecuária de corte.",
        average_weight: 500.0,
        productivity: "corte",
        species: { connect: { id: cattle.id } },
      },
    });
    const holstein = await prisma.breeds.create({
      data: {
        name: "Holstein",
        description:
          "Raça europeia altamente produtiva, líder mundial na produção de leite, com coloração preta e branca.",
        average_weight: 600.0,
        productivity: "leiteira",
        species: { connect: { id: cattle.id } },
      },
    });
  } catch (error) {
    console.log("Erro ao criar raças de gados: ", error);
  }
}

async function createBreedsSwine() {
  try {
    const swine = await prisma.species.findFirst({
      where: {
        name: "SWINE",
      },
      select: {
        id: true,
      },
    });
    const landrace = await prisma.breeds.create({
      data: {
        name: "Landrace",
        description:
          "Suíno de origem dinamarquesa, muito usado em cruzamentos industriais por seu alto rendimento de carne magra.",
        average_weight: 250.0,
        productivity: "corte",
        species: { connect: { id: swine.id } },
      },
    });
    const duroc = await prisma.breeds.create({
      data: {
        name: "Duroc",
        description:
          "Raça americana conhecida por seu crescimento rápido e carne com boa marmorização.",
        average_weight: 300.0,
        productivity: "corte",
        species: { connect: { id: swine.id } },
      },
    });
    const pietrain = await prisma.breeds.create({
      data: {
        name: "Pietrain",
        description:
          "Raça belga altamente musculosa, conhecida por excelente rendimento de carne magra. Usada frequentemente em cruzamentos industriais.",
        average_weight: 280.0,
        productivity: "corte",
        species: { connect: { id: swine.id } },
      },
    });
    const hampshire = await prisma.breeds.create({
      data: {
        name: "Hampshire",
        description:
          "Suíno de origem americana, com corpo preto e faixa branca no dorso. É valorizado pelo bom ganho de peso e qualidade da carne.",
        average_weight: 270.0,
        productivity: "corte",
        species: { connect: { id: swine.id } },
      },
    });
    const moura = await prisma.breeds.create({
      data: {
        name: "Moura",
        description:
          "Raça brasileira nativa, rústica e resistente, criada tradicionalmente a pasto. Produz carne de alta qualidade e sabor acentuado",
        average_weight: 240.0,
        productivity: "corte",
        species: { connect: { id: swine.id } },
      },
    });
  } catch (error) {
    console.error("erro ao criar raça de gados" + error);
  }
}

async function createBreedsEquine() {
  try {
    const equine = await prisma.species.findFirst({
      where: {
        name: "EQUINE",
      },
      select: {
        id: true,
      },
    });
    const crioulo = await prisma.breeds.create({
      data: {
        name: "Crioulo",
        description:
          "Raça sul-americana extremamente resistente, ideal para trabalhos rurais em regiões inóspitas.",
        average_weight: 430,
        productivity: "Trabalho",
        species: { connect: { id: equine.id } },
      },
    });
  } catch (error) {
    console.log("Erro ao criar breeds (equine):" + error);
  }
}

async function createBreedsPoultry() {
  try {
    const poultry = await prisma.species.findFirst({
      where: {
        name: "POULTRY",
      },
      select: {
        id: true,
      },
    });
    const leghorn = await prisma.breeds.create({
      data: {
        name: "Leghorn",
        description:
          "Raça italiana de galinha muito utilizada na produção comercial de ovos, conhecida por sua alta postura.",
        average_weight: 2.3,
        productivity: "ovos",
        species: { connect: { id: poultry.id } },
      },
    });
  } catch (error) {
    console.error("erro ao criar raça de galinhas" + error);
  }
}

async function createAnimals() {
  try {
    const species_cattle_id = await prisma.species.findFirst({
      where: {
        name: "CATTLE",
      },
      select: {
        id: true,
      },
    });
    const species_swine_id = await prisma.species.findFirst({
      where: {
        name: "SWINE",
      },
    });
    const species_poultry_id = await prisma.species.findFirst({
      where: {
        name: "POULTRY",
      },
    });

    const breed_nelore_id = await prisma.breeds.findFirst({
      where: {
        name: "Nelore",
      },
      select: {
        id: true,
      },
    });
    const breed_moura_id = await prisma.breeds.findFirst({
        where: {
            name: "Moura",
        },
        select: {
            id: true,
            },
    })
    const farm = await prisma.farms.findFirst({ select: { id: true } });
    // Criar Boi
    await prisma.animals.create({
      data: {
        name: "Perola",
        birth_date: new Date(),
        species: { connect: {id:species_cattle_id.id} },
        breed: { connect: {id: breed_nelore_id.id} },
        weight: 500,
        health_status: "HEALTHY",
        farm: { connect: {id:farm.id} },
      },
    });

    await prisma.animals.create({
      data: {
        name: "Rabicó",
        birth_date: new Date(),
        species: {connect: {id:species_swine_id.id}},
        breed: {connect: {id: breed_moura_id.id}},
        weight: 240, 
        health_status: "HEALTHY",
        farm: {connect: {id: farm.id}},
      },
    });

    await prisma.animals.create({
        data: {
            name: "Cocó" ,
            birth_date: new Date(),
            species: {connect:{id: species_poultry_id.id} }, 
            breed: {connect: {id: breed_moura_id.id}},
            weight: 2.4 ,
            health_status: "HEALTHY",
            farm: {connect: {id: farm.id} },
        }
    })
  } catch (error) {
    console.error("erro ao criar animal" + error);
  }
}

async function main() {
  try {
    await createFarm();
    await createUserVeterinarians();
    await createUserFarmhands();
    await createUserFarmer();
    await createSpecies();
    await createBreedsCattle();
    await createBreedsSwine();
    await createBreedsEquine();
    await createBreedsPoultry();
    await createAnimals(); 
  } catch (error) {
    console.log("Erro ao criar usuarios " + error);
  }

  console.log("Fim da execução");
}

main()
  .catch((err) => {
    console.error("❌ Erro ao executar seed:", err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
