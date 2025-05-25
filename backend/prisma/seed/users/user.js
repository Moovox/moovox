const prisma = require("../../../src/config/database");
const { faker, logError, hashPassword, getFirstFarm } = require("../utils");

async function createUser(role) {
    try {
        const farm = await prisma.farms.findFirst({ select: { id: true } });
        if (!farm) throw new Error("Nenhuma fazenda encontrada");
        const name = faker.person.fullName();
        const email =
            role === "ADMIN"
                ? "admin@moovox.com"
                : `${name.replace(/\s+/g, "").toLowerCase()}@moovox.com`;

        const user = await prisma.users.create({
            data: {
                name,
                email,
                password: hashPassword("123456"),
                role,
                farm: {
                    connect: { id: farm.id },
                },
            },
        });
        return user;
    } catch (error) {
        logError(`createUser(${role})`, error);
    }
}

module.exports = createUser;
