const path = require('path');
const dotenv = require('dotenv');

// Carrega o arquivo .env apropriado baseado no ambiente
const envFile = process.env.NODE_ENV === 'development' ? '.env.development' : '.env';
dotenv.config({ path: path.resolve(__dirname, '../../', envFile) });

module.exports = {
    isDevelopment: process.env.NODE_ENV === 'development',
    database: {
        url: process.env.DATABASE_URL,
        shadowUrl: process.env.SHADOW_DATABASE_URL
    },
    server: {
        port: process.env.PORT || 3000
    },
    jwt: {
        secret: process.env.JWT_SECRET
    }
}; 