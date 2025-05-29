// Importa o PrismaClient do pacote @prisma/client
const { PrismaClient } = require('../../generated/prisma');
const config = require('./env');

/**
 * Instância única do Prisma Client para acesso ao banco de dados.
 * 
 * A opção `errorFormat: 'pretty'` melhora a legibilidade dos erros
 * lançados durante operações com o banco de dados.
 * 
 * Em ambiente de desenvolvimento, habilitamos logs para debug.
 */
const prisma = new PrismaClient({
    errorFormat: 'pretty',
    log: config.isDevelopment ? ['query', 'info', 'warn', 'error'] : ['error']
});

// Exporta a instância do Prisma para uso em toda a aplicação
module.exports = prisma;

