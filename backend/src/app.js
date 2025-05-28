const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const routes = require('./routes');

const app = express();

const allowedOrigins = ['https://moovox.systems', 'https://www.moovox.systems'];

// Configuração de CORS
const corsOptions = {
    origin: function (origin, callback) {
        // Permitir requisições sem origem (como de ferramentas locais ou Postman)
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
};

// Aplica o CORS a todas as rotas
app.use(cors(corsOptions));

// Trata requisições OPTIONS antes de qualquer outra
app.options('*', cors(corsOptions));

// Middleware para JSON e URL encoded
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Log para depuração
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
});

// Suas rotas da API
app.use('/api', routes);

// Mensagem no terminal
console.log('Express inicializado e aguardando requisições...');

module.exports = app;
