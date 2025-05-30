/**
 * Script para alternar para o banco de dados Azure
 * Este script restaura o arquivo .env.production.backup para .env
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../');
const envPath = path.join(rootDir, '.env');
const envProdBackupPath = path.join(rootDir, '.env.production.backup');
const envProdPath = path.join(rootDir, '.env.production');
const envDevBackupPath = path.join(rootDir, '.env.development.backup');

console.log('Configurando para usar banco de dados AZURE...');

// Verifica se existe um backup de produção
let prodEnvExists = false;
let prodEnvPath = '';

if (fs.existsSync(envProdBackupPath)) {
    prodEnvExists = true;
    prodEnvPath = envProdBackupPath;
} else if (fs.existsSync(envProdPath)) {
    prodEnvExists = true;
    prodEnvPath = envProdPath;
}

if (!prodEnvExists) {
    console.error('Erro: Nenhum arquivo de configuração de produção encontrado.');
    console.error('Crie um arquivo .env.production com suas configurações do Azure.');
    process.exit(1);
}

// Faz backup do arquivo .env atual (se for de desenvolvimento)
try {
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf8');
        const prodEnvContent = fs.readFileSync(prodEnvPath, 'utf8');
        
        if (envContent !== prodEnvContent) {
            console.log('Fazendo backup do arquivo .env atual para .env.development.backup...');
            fs.writeFileSync(envDevBackupPath, envContent, 'utf8');
        }
    }
} catch (error) {
    console.error('Erro ao fazer backup do arquivo .env:', error.message);
}

// Copia o conteúdo do arquivo de produção para .env
try {
    const prodEnvContent = fs.readFileSync(prodEnvPath, 'utf8');
    fs.writeFileSync(envPath, prodEnvContent, 'utf8');
    console.log('Configuração AZURE aplicada com sucesso!');
    console.log('Use "npm run prod" para iniciar o servidor com o banco de dados Azure.');
} catch (error) {
    console.error('Erro ao configurar para o banco de dados Azure:', error.message);
    process.exit(1);
} 