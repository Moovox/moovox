function ensureNonEmpty(entity, entityName = "Registros") {

    if (!entity || entity.length === 0) {
        throw new Error(`Nenhum ${entityName.toLowerCase()}encontrado`);
    }
}

module.exports = {ensureNonEmpty}; 