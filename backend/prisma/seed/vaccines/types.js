const prisma = require('../../../src/config/database');
const { logError } = require('../utils'); 

async function createTypesOfVaccines(){
    try {
        const types = ["Injectable", "Oral", "Intranasal", "Transdermal", "Intramammary", "Spray" ];

        await prisma.types_of_Vaccines.createMany({
            data: types.map((type) => ({ name: type}))
        });

        
    console.log("✅ Tipos de vacinas criados com sucesso.");
    } catch (error) {
        logError("createTypesOfVaccines", error);
        
    }
}

module.exports = createTypesOfVaccines; 