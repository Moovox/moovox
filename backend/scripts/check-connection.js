/**
 * Script para verificar a conexão com o banco de dados
 * Este script tenta se conectar ao banco de dados definido em .env
 */

const { PrismaClient } = require('../../generated/prisma');
const dotenv = require('dotenv');
const path = require('path');

// Carrega as variáveis de ambiente
dotenv.config({ path: path.resolve(__dirname, '../.env') });

// Função para extrair informações da URL de conexão para exibição segura
function getConnectionInfo(url) {
    if (!url) return 'URL de conexão não definida';
    
    try {
        // Extrai informações básicas sem expor credenciais
        const serverMatch = url.match(/sqlserver:\/\/([^:;]+)/);
        const dbMatch = url.match(/database=([^;]+)/);
        const authTypeMatch = url.match(/(integratedSecurity=true|user=[^;]+)/);
        
        const server = serverMatch ? serverMatch[1] : 'desconhecido';
        const database = dbMatch ? dbMatch[1] : 'desconhecido';
        const authType = authTypeMatch 
            ? (authTypeMatch[1].includes('integrated') ? 'Autenticação Windows' : 'Autenticação SQL Server')
            : 'desconhecido';
        
        return `Servidor: ${server}, Banco: ${database}, Autenticação: ${authType}`;
    } catch (error) {
        return 'Erro ao analisar URL de conexão';
    }
}

async function checkConnection() {
    console.log('Verificando conexão com o banco de dados...');
    console.log('Configuração atual:', getConnectionInfo(process.env.DATABASE_URL));
    
    const prisma = new PrismaClient();
    
    try {
        // Tenta executar uma consulta simples
        console.log('Tentando conectar...');
        const result = await prisma.$queryRaw`SELECT 1 as teste`;
        
        console.log('✅ Conexão bem-sucedida!');
        console.log('Resultado da consulta de teste:', result);
        
        return true;
    } catch (error) {
        console.error('❌ Erro ao conectar ao banco de dados:');
        console.error(error.message);
        
        // Dicas específicas com base no erro
        if (error.message.includes('Login failed for user')) {
            console.log('\nDica: Verifique se as credenciais do usuário estão corretas.');
        } else if (error.message.includes('Cannot open server')) {
            console.log('\nDica: Verifique se o servidor está acessível e se as regras de firewall permitem conexão.');
        } else if (error.message.includes('network-related')) {
            console.log('\nDica: Verifique se o serviço SQL Server está em execução.');
            console.log('Execute "services.msc" e procure por "SQL Server".');
        }
        
        return false;
    } finally {
        await prisma.$disconnect();
    }
}

// Executa a verificação
checkConnection()
    .then(success => {
        if (!success) {
            process.exit(1);
        }
    })
    .catch(error => {
        console.error('Erro não tratado:', error);
        process.exit(1);
    }); 