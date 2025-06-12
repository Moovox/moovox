const prisma = require("../../../src/config/database");
const { faker, logError, hashPassword, getFirstFarm } = require("../utils");

// Counter to ensure unique emails
let userCounter = 1;

async function createUser(role) {
  try {
    // Get all farms to distribute users across them
    const farms = await prisma.farms.findMany({ select: { id: true } });
    if (!farms || farms.length === 0) throw new Error("No farm found");

    // Select a random farm for this user
    const randomFarm = farms[Math.floor(Math.random() * farms.length)];

    const name = faker.person.fullName();
    const baseEmail = name.replace(/\s+/g, "").toLowerCase();
    const uniqueId = userCounter.toString().padStart(3, "0");

    const email =
      role === "ADMIN"
        ? "admin@moovox.com"
        : `${baseEmail}${uniqueId}@moovox.com`;

    const user = await prisma.users.create({
      data: {
        name,
        email,
        password: hashPassword("123456"),
        role,
        farm: {
          connect: { id: randomFarm.id },
        },
      },
    });

    userCounter++;
    return user;
  } catch (error) {
    logError(`createUser(${role})`, error);
    throw error;
  }
}

module.exports = createUser;
