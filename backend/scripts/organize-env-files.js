/**
 * Script para organizar os arquivos de ambiente
 * Este script padroniza os nomes e verifica a existência de todos os arquivos necessários
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../');

// Lista de arquivos a verificar e organizar
const files = {
    // Arquivos principais
    '.env': { required: true, backup: '.env.backup' },
    '.env.development': { required: true, backup: '.env.development.backup' },
    '.env.production': { required: false, backup: '.env.production.backup' },
    
    // Backup e exemplos
    '.env.example': { required: false, generate: true },
    '.env.local.backup': { required: false, rename: '.env.development.backup' },
    '.env.azure.backup': { required: false, rename: '.env.production.backup' },
};

console.log('Organizando arquivos de ambiente...');

// Verificar e organizar cada arquivo
Object.entries(files).forEach(([filename, options]) => {
    const filePath = path.join(rootDir, filename);
    const exists = fs.existsSync(filePath);
    
    console.log(`${filename}: ${exists ? 'Existe' : 'Não existe'}`);
    
    // Se o arquivo é obrigatório mas não existe
    if (options.required && !exists) {
        console.warn(`ATENÇÃO: Arquivo obrigatório ${filename} não encontrado!`);
    }
    
    // Se o arquivo deve ser renomeado
    if (options.rename && exists) {
        const newPath = path.join(rootDir, options.rename);
        console.log(`Renomeando ${filename} para ${options.rename}...`);
        try {
            // Verifica se o arquivo de destino já existe
            if (fs.existsSync(newPath)) {
                const originalContent = fs.readFileSync(filePath, 'utf8');
                const destContent = fs.readFileSync(newPath, 'utf8');
                
                // Só substitui se o conteúdo for diferente
                if (originalContent !== destContent) {
                    console.log(`Arquivo ${options.rename} já existe com conteúdo diferente. Criando ${options.rename}.new`);
                    fs.writeFileSync(path.join(rootDir, `${options.rename}.new`), originalContent, 'utf8');
                } else {
                    console.log(`Arquivo ${options.rename} já existe com o mesmo conteúdo. Nenhuma ação necessária.`);
                }
            } else {
                fs.renameSync(filePath, newPath);
            }
        } catch (error) {
            console.error(`Erro ao renomear ${filename}:`, error.message);
        }
    }
    
    // Se o arquivo precisa ser gerado
    if (options.generate && !exists) {
        console.log(`Arquivo ${filename} não encontrado. Gerando...`);
        try {
            // Chama o script de criação do .env.example
            require('./create-env-example');
        } catch (error) {
            console.error(`Erro ao gerar ${filename}:`, error.message);
        }
    }
    
    // Cria um backup se necessário
    if (options.backup && exists) {
        const backupPath = path.join(rootDir, options.backup);
        if (!fs.existsSync(backupPath)) {
            console.log(`Criando backup de ${filename} em ${options.backup}...`);
            try {
                fs.copyFileSync(filePath, backupPath);
            } catch (error) {
                console.error(`Erro ao criar backup de ${filename}:`, error.message);
            }
        }
    }
});

console.log('\nOrganização concluída!');
console.log('\nArquivos de ambiente disponíveis:');
fs.readdirSync(rootDir)
    .filter(file => file.startsWith('.env'))
    .forEach(file => {
        console.log(`- ${file}`);
    }); 