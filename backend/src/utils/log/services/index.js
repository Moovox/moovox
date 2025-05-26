function logErrorAndThrow(entityName, error) {
    console.error(`Erro ao buscar ${entityName}:`, error);

    // Se for um erro "esperado" não sobrescreve
    if (error.message.toLowerCase().includes("nenhum") && error.message.toLowerCase().includes("encontrado")) {
        throw error;
    }

    throw new Error(`Não foi possível buscar ${entityName} no momento.`);
}


module.exports = { logErrorAndThrow };