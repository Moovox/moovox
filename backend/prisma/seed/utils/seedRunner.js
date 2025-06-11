async function runSeedGroup(seedGroup, groupName = "Seed Group") {
  try {
    for (const fn of Object.values(seedGroup)) {
      await fn();
    }
    console.log(`   ✅ ${groupName} criados`);
  } catch (error) {
    console.error(`   ❌ Erro em ${groupName}:`, error.message);
    throw error;
  }
}
module.exports = runSeedGroup;
