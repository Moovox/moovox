const prisma = require("../../../src/config/database");
const { logError } = require("../utils");

async function createBreedsPoultry() {
    try {
        const species = await prisma.species.findFirst({
            where: { name: "POULTRY" },
        });

        const breeds = [
            {
                name: "Leghorn",
                description:
                    "Raça italiana de galinha muito utilizada na produção comercial de ovos, conhecida por sua alta postura.",
                average_weight: 2.3,
                productivity: "ovos",
            },
            {
                name: "Rhode Island Red",
                description:
                    "Raça americana muito popular, conhecida por sua rusticidade e boa produção de ovos marrons.",
                average_weight: 3.0,
                productivity: "ovos",
            },

            {
                name: "Plymouth Rock",
                description:
                    "Raça versátil de dupla aptidão, excelente para produção de carne e ovos. Muito dócil e fácil de criar.",
                average_weight: 3.4,
                productivity: "dupla aptidão",
            },

            {
                name: "Sussex",
                description:
                    "Galinha britânica de crescimento rápido e boa postura. Produz ovos grandes e tem carne de boa qualidade.",
                average_weight: 3.2,
                productivity: "dupla aptidão",
            },

            {
                name: "Cornish",
                description:
                    "Raça inglesa especializada na produção de carne. Base genética dos frangos de corte comerciais.",
                average_weight: 4.5,
                productivity: "carne",
            },

            {
                name: "Australorp",
                description:
                    "Raça australiana famosa por bater recordes de postura. Muito usada para produção de ovos em sistemas alternativos.",
                average_weight: 3.1,
                productivity: "ovos",
            },

            {
                name: "Caipira (Matrizes Comerciais)",
                description:
                    "Linha desenvolvida no Brasil para sistemas alternativos, com boa rusticidade e aproveitamento tanto de carne quanto de ovos.",
                average_weight: 2.8,
                productivity: "dupla aptidão",
            },
        ];

        await prisma.breeds.createMany({
            data: breeds.map((breed) => ({
                ...breed,
                species_id: species.id,
            })),
        });
    } catch (error) {
        logError("createBreedsPoultry", error);
    }
}

module.exports = createBreedsPoultry; 
