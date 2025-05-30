const path = require('path');
const dotenv = require('dotenv');
const fs = require('fs');

// Determina o ambiente atual - forçando desenvolvimento para debug
const NODE_ENV = process.env.NODE_ENV || 'development';
console.log('Ambiente atual:', NODE_ENV);

// Sempre carrega o .env primeiro como fallback
const defaultEnvPath = path.resolve(__dirname, '../../', '.env');
if (fs.existsSync(defaultEnvPath)) {
    console.log('Carregando .env como fallback');
    dotenv.config({ path: defaultEnvPath });
}

// Se em desenvolvimento, dá prioridade ao .env.development (sobrescreve configurações)
if (NODE_ENV === 'development') {
    const devEnvPath = path.resolve(__dirname, '../../', '.env.development');
    if (fs.existsSync(devEnvPath)) {
        console.log('Carregando .env.development (tem prioridade)');
        dotenv.config({ path: devEnvPath, override: true });
    } else {
        console.log('Arquivo .env.development não encontrado');
    }
}

// Configuração centralizada de todo o ambiente da aplicação
const config = {
    isDevelopment: NODE_ENV === 'development',
    database: {
        url: process.env.DATABASE_URL,
        shadowUrl: process.env.SHADOW_DATABASE_URL
    },
    server: {
        port: parseInt(process.env.PORT || '3001', 10)
    },
    jwt: {
        secret: process.env.JWT_SECRET,
        expiresIn: process.env.JWT_EXPIRES_IN || '24h'
    },
    cors: {
        allowedOrigins: NODE_ENV === 'development'
            ? ['http://localhost:5173', 'http://localhost:3001']
            : ['https://www.moovox.systems', 'https://moovox.systems']
    }
};

console.log('URL do banco de dados:', config.database.url?.substring(0, 30) + '...');

module.exports = config; 