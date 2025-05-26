function logErrorAndThrow(entityName, error) {
    console.error(`Erro ao buscar ${entityName}:`, error);
    throw new Error(`Não foi possível buscar ${entityName}s no momento.`);
}

module.exports = { logErrorAndThrow };