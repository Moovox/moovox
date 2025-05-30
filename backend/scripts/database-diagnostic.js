/**
 * Script para diagnóstico do banco de dados
 * Verifica a conexão e os dados existentes
 */

const prisma = require('../src/config/database');
const dotenv = require('dotenv');
const path = require('path');
const bcrypt = require('bcryptjs');

// Carrega as variáveis de ambiente
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Função para criar um usuário admin caso não exista
async function createAdminIfNeeded() {
    try {
        console.log('Verificando se o usuário admin existe...');
        
        // Verifica se existe pelo menos uma fazenda
        const farm = await prisma.farms.findFirst();
        if (!farm) {
            console.log('Nenhuma fazenda encontrada. Criando fazenda padrão...');
            await prisma.farms.create({
                data: {
                    name: 'Fazenda Moovox'
                }
            });
            console.log('Fazenda padrão criada com sucesso.');
        }
        
        // Busca novamente para ter certeza
        const newFarm = await prisma.farms.findFirst();
        
        // Verifica se existe o usuário admin
        const adminUser = await prisma.users.findUnique({
            where: { email: 'admin@moovox.com' }
        });
        
        if (!adminUser) {
            console.log('Usuário admin não encontrado. Criando usuário admin...');
            
            // Cria o usuário admin
            await prisma.users.create({
                data: {
                    name: 'Administrador',
                    email: 'admin@moovox.com',
                    password: bcrypt.hashSync('123456', 10),
                    role: 'ADMIN',
                    farm_id: newFarm.id
                }
            });
            
            console.log('Usuário admin criado com sucesso!');
        } else {
            console.log('Usuário admin já existe:', adminUser.email);
        }
    } catch (error) {
        console.error('Erro ao verificar/criar usuário admin:', error);
    }
}

// Função principal de diagnóstico
async function runDiagnostic() {
    console.log('Iniciando diagnóstico do banco de dados...');
    
    try {
        // Testa a conexão
        console.log('Testando conexão...');
        await prisma.$queryRaw`SELECT 1 as test`;
        console.log('✅ Conexão estabelecida com sucesso.');
        
        // Lista as tabelas
        console.log('\nVerificando tabelas do banco...');
        const tables = await prisma.$queryRaw`SELECT TABLE_NAME FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_TYPE = 'BASE TABLE'`;
        console.log('Tabelas encontradas:');
        tables.forEach((table, index) => {
            console.log(`${index + 1}. ${table.TABLE_NAME}`);
        });
        
        // Verifica se há fazendas
        console.log('\nVerificando fazendas...');
        const farms = await prisma.farms.findMany();
        console.log(`Encontradas ${farms.length} fazendas.`);
        farms.forEach((farm, index) => {
            console.log(`${index + 1}. ${farm.name} (ID: ${farm.id})`);
        });
        
        // Verifica se há usuários
        console.log('\nVerificando usuários...');
        const users = await prisma.users.findMany({
            select: {
                id: true,
                name: true,
                email: true,
                role: true,
                farm_id: true
            }
        });
        console.log(`Encontrados ${users.length} usuários.`);
        users.forEach((user, index) => {
            console.log(`${index + 1}. ${user.name} (${user.email}) - Perfil: ${user.role}, Fazenda: ${user.farm_id}`);
        });
        
        // Criar usuário admin se necessário
        await createAdminIfNeeded();
        
    } catch (error) {
        console.error('❌ Erro durante o diagnóstico:', error);
    } finally {
        await prisma.$disconnect();
    }
}

// Executa o diagnóstico
runDiagnostic()
    .then(() => {
        console.log('\nDiagnóstico concluído.');
        process.exit(0);
    })
    .catch(error => {
        console.error('Erro fatal durante o diagnóstico:', error);
        process.exit(1);
    }); 