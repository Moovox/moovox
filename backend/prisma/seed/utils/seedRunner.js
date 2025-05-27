async function runSeedGroup(seedGroup, groupName = "Seed Group") {
    try {
        console.log(`🌱 Iniciando seeds: ${groupName}`);
        for(const fn of Object.values(seedGroup)) {
            await fn(); 
        }
        console.log(`✅ Seeds concluídas: ${groupName}`)
    } catch (error) {
        console.error(`❌ Erro em ${groupName}`, error)
        
    }
}
module.exports = runSeedGroup; 