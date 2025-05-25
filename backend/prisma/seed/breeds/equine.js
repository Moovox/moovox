const prisma = require("../../../src/config/database");
const { logError } = require("../utils");

async function createBreedsEquine() {
    try {
        const species = await prisma.species.findFirst({
            where: { name: "EQUINE" },
        });

        const breeds = [
            {
                name: "Crioulo",
                description:
                    "Raça sul-americana extremamente resistente, ideal para trabalhos rurais em regiões inóspitas.",
                average_weight: 430,
                productivity: "Trabalho",
            },
            {
                name: "Mangalarga Marchador",
                description:
                    "Raça brasileira conhecida por sua marcha confortável e resistência. Ideal para cavalgadas de longa distância.",
                average_weight: 450,
                productivity: "Montaria e trabalho leve",
            },
            {
                name: "Quarto de Milha",
                description:
                    "Raça norte-americana muito popular no Brasil, conhecida por sua força e velocidade em curtas distâncias. Usada em provas e no campo.",
                average_weight: 500,
                productivity: "Trabalho, esportes e montaria",
            },
            {
                name: "Percheron",
                description:
                    "Cavalo de tração francês, muito forte e dócil. Utilizado em serviços pesados como o transporte e o arado.",
                average_weight: 900,
                productivity: "Tração pesada",
            },
        ];

        await prisma.breeds.createMany({
            data: breeds.map((breed) => ({
                ...breed,
                species_id: species.id,
            }))
        })
    } catch (error) {
        logError("createBreedsEquine", error);
    }
}

module.exports = createBreedsEquine; 