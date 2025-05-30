/**
 * Script para criar um arquivo .env.example atualizado
 */

const fs = require('fs');
const path = require('path');

const rootDir = path.resolve(__dirname, '../');
const envExamplePath = path.join(rootDir, '.env.example');

const envExampleContent = `# Configuração do banco de dados
# DESCOMENTE E CONFIGURE A OPÇÃO DESEJADA:

## Opção 1: Configuração para desenvolvimento local (SQL Server com autenticação Windows)
# DATABASE_URL="sqlserver://localhost:1433;database=moovox;integratedSecurity=true;trustServerCertificate=true"
# SHADOW_DATABASE_URL="sqlserver://localhost:1433;database=moovox_shadow;integratedSecurity=true;trustServerCertificate=true"

## Opção 2: Configuração para desenvolvimento local (SQL Server com autenticação SQL)
# DATABASE_URL="sqlserver://localhost:1433;database=moovox;user=USUARIO;password=SENHA;trustServerCertificate=true"
# SHADOW_DATABASE_URL="sqlserver://localhost:1433;database=moovox_shadow;user=USUARIO;password=SENHA;trustServerCertificate=true"

## Opção 3: Configuração para produção (Azure SQL)
# DATABASE_URL="sqlserver://SERVIDOR.database.windows.net:1433;database=moovox;user=USUARIO;password=SENHA;encrypt=true"
# SHADOW_DATABASE_URL="sqlserver://SERVIDOR.database.windows.net:1433;database=moovoxShadow;user=USUARIO;password=SENHA;encrypt=true"

# Porta do servidor
PORT=3001

# Chave secreta para JWT (usar uma string aleatória em produção)
JWT_SECRET="chave_secreta_para_tokens_jwt"

# Ambiente (development, production, test)
NODE_ENV="development"

# Configurações adicionais (opcional)
# BCRYPT_SALT_ROUNDS=10
# JWT_EXPIRES_IN=24h
`;

try {
    fs.writeFileSync(envExamplePath, envExampleContent, 'utf8');
    console.log('Arquivo .env.example criado com sucesso!');
} catch (error) {
    console.error('Erro ao criar arquivo .env.example:', error.message);
    process.exit(1);
} 