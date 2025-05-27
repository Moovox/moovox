const prisma = require('../../../src/config/database');
const { logError, faker } = require('../utils');
const { cnpj } = require("cpf-cnpj-validator");


async function createManufacturer() {
    try {
        await prisma.manufacturers.create({
            data: {
                name: "BioVac Brasil S.A",
                cnpj: cnpj.generate(),
                email: "contato@biovac.com",
                phone: faker.phone.number(),
                address: `${faker.location.street()}, ${faker.location.buildingNumber()} - ${faker.location.zipCode()} - ${faker.location.city()} - ${faker.location.state()}`,
                country: "Brazil",
                license_number: "VAC-MFG-2025-BR-009872",
            }
        });

        console.log("✅ Fabricante criado com sucesso.");
    } catch (error) {
        logError("createManufacturer", error);
    }
}

module.exports = createManufacturer;