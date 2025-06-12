async function runSeedGroup(seedGroup, groupName = "Seed Group") {
  try {
    for (const fn of Object.values(seedGroup)) {
      await fn();
    }
    console.log(`   ✅ ${groupName} created`);
  } catch (error) {
    console.error(`   ❌ Error in ${groupName}:`, error.message);
    throw error;
  }
}
module.exports = runSeedGroup;
