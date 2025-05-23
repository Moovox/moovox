const prisma = require("../src/config/database");
const { fakerPT_BR } = require("@faker-js/faker");
const faker = fakerPT_BR;
const bcrypt = require('bcryptjs'); 

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
                }
            })
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
                }
            })
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

async function main () {
    try {
    await createFarm()
    await createUserVeterinarians()
    await createUserFarmhands()
    await createUserFarmer()
        
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
.finally(async() => {
    await prisma.$disconnect();
});



