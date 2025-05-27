const prisma = require('../../../src/config/database');
const { logError } = require('../utils');


async function createBreedsCattle() {
    try {
        const species = await prisma.species.findFirst({ where: { name: "CATTLE" } });

        const breeds = [
            {
                name: "Angus",
                description:
                    "Raça britânica de corte, muito valorizada pela maciez e marmorização da carne. Muito usada em cruzamentos.",
                average_weight: 600.0,
                productivity: "corte",
            },
            {
                name: "Brahman",
                description:
                    "Raça zebuína originária dos EUA (baseada no Nelore, Guzerá e Gir), muito resistente ao calor e usada em cruzamentos para corte.",
                average_weight: 550.0,
                productivity: "corte",
            },
            {
                name: "Nelore",
                description:
                    "Raça zebuína originária da Índia, muito adaptada ao clima tropical brasileiro, predominante na pecuária de corte.",
                average_weight: 500.0,
                productivity: "corte",
            },
            {
                name: "Holstein",
                description:
                    "Raça europeia altamente produtiva, líder mundial na produção de leite, com coloração preta e branca.",
                average_weight: 600.0,
                productivity: "leiteira",
            },
        ];

        await prisma.breeds.createMany({
            data: breeds.map((breed) => ({
                ...breed,
                species_id: species.id,
            }))
        })
    } catch (error) {
        logError("createBreedsCattle", error);
    }
}

module.exports = createBreedsCattle; 