// Importa o PrismaClient do pacote @prisma/client
const { PrismaClient } = require('../../generated/prisma');
const config = require('./env');

/**
 * Singleton para o Prisma Client garantindo apenas uma instância em toda a aplicação
 */
class PrismaInstance {
    constructor() {
        if (!PrismaInstance.instance) {
            try {
                PrismaInstance.instance = new PrismaClient({
                    errorFormat: 'pretty',
                    log: config.isDevelopment ? ['error', 'warn'] : ['error']
                });
                
                console.log('Conexão com o banco de dados inicializada');
            } catch (error) {
                console.error('Erro ao inicializar o banco de dados:', error.message);
                throw error;
            }
        }
    }

    getInstance() {
        return PrismaInstance.instance;
    }
}

// Exporta a instância única do Prisma para uso em toda a aplicação
module.exports = new PrismaInstance().getInstance();

