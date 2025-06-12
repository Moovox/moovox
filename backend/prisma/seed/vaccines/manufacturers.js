const prisma = require("../../../src/config/database");
const { logError, faker } = require("../utils");
const { cnpj } = require("cpf-cnpj-validator");

async function createManufacturers() {
  try {
    const manufacturers = [
      {
        name: "BioVac Brasil S.A",
        cnpj: cnpj.generate(),
        email: "contato@biovac.com.br",
        phone: "+55 11 3456-7890",
        address:
          "Industrial Street, 1250 - Industrial District - 13087-534 - Campinas - SP",
        country: "Brazil",
        license_number: "VAC-MFG-2025-BR-009872",
        website: "https://www.biovac.com.br",
        active: true,
      },
      {
        name: "Modern Veterinary Ltd",
        cnpj: cnpj.generate(),
        email: "vendas@vetmoderna.com.br",
        phone: "+55 11 2345-6789",
        address:
          "Livestock Avenue, 850 - Downtown - 14800-900 - Araraquara - SP",
        country: "Brazil",
        license_number: "VAC-MFG-2024-BR-008521",
        website: "https://www.vetmoderna.com.br",
        active: true,
      },
      {
        name: "AgroHealth Pharmaceutical",
        cnpj: cnpj.generate(),
        email: "info@agrosaude.com.br",
        phone: "+55 16 3678-9012",
        address:
          "Anhanguera Highway, km 245 - Rural Zone - 14870-000 - Jaboticabal - SP",
        country: "Brazil",
        license_number: "VAC-MFG-2023-BR-007634",
        website: "https://www.agrosaude.com.br",
        active: true,
      },
      {
        name: "PecuVac International",
        cnpj: cnpj.generate(),
        email: "brasil@pecuvac.com",
        phone: "+55 21 4567-8901",
        address:
          "Mendanha Road, 2100 - Campo Grande - 23087-280 - Rio de Janeiro - RJ",
        country: "Brazil",
        license_number: "VAC-MFG-2025-BR-009123",
        website: "https://www.pecuvac.com",
        active: true,
      },
      {
        name: "United Veterinary Laboratories",
        cnpj: cnpj.generate(),
        email: "contato@labvetunidos.com.br",
        phone: "+55 31 5678-9012",
        address:
          "Veterinarians Street, 456 - Pampulha - 31270-901 - Belo Horizonte - MG",
        country: "Brazil",
        license_number: "VAC-MFG-2024-BR-008765",
        website: "https://www.labvetunidos.com.br",
        active: true,
      },
    ];

    await prisma.manufacturers.createMany({
      data: manufacturers,
    });

    console.log(`     ✅ ${manufacturers.length} manufacturers created`);
  } catch (error) {
    logError("createManufacturers", error);
    throw error;
  }
}

module.exports = createManufacturers;
