/**
 * Script para alternar para o banco de dados local
 * Este script copia o conteúdo do arquivo .env.development para .env
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../');
const envDevPath = path.join(rootDir, '.env.development');
const envPath = path.join(rootDir, '.env');
const envProdBackupPath = path.join(rootDir, '.env.production.backup');

console.log('Configurando para usar banco de dados LOCAL...');

// Verifica se .env.development existe
if (!fs.existsSync(envDevPath)) {
    console.error('Erro: Arquivo .env.development não encontrado.');
    console.error('Crie um arquivo .env.development com suas configurações locais.');
    process.exit(1);
}

// Faz backup do arquivo .env atual (se for diferente do .env.development)
try {
    if (fs.existsSync(envPath)) {
        const envContent = fs.readFileSync(envPath, 'utf8');
        const envDevContent = fs.readFileSync(envDevPath, 'utf8');
        
        if (envContent !== envDevContent) {
            console.log('Fazendo backup do arquivo .env atual para .env.production.backup...');
            fs.writeFileSync(envProdBackupPath, envContent, 'utf8');
        }
    }
} catch (error) {
    console.error('Erro ao fazer backup do arquivo .env:', error.message);
}

// Copia o conteúdo de .env.development para .env
try {
    const envDevContent = fs.readFileSync(envDevPath, 'utf8');
    fs.writeFileSync(envPath, envDevContent, 'utf8');
    console.log('Configuração LOCAL aplicada com sucesso!');
    console.log('Use "npm run dev" para iniciar o servidor com o banco de dados local.');
} catch (error) {
    console.error('Erro ao configurar para o banco de dados local:', error.message);
    process.exit(1);
} 