// Importa o PrismaClient do pacote @prisma/client
const { PrismaClient } = require('@prisma/client'); 

/**
 * Instância única do Prisma Client para acesso ao banco de dados.
 * 
 * A opção `errorFormat: 'pretty'` melhora a legibilidade dos erros
 * lançados durante operações com o banco de dados.
 */
const prisma = new PrismaClient({
    errorFormat: 'pretty',
});

// Exporta a instância do Prisma para uso em toda a aplicação
module.exports = prisma;
