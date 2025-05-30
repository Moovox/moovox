const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const routes = require('./routes');
const config = require('./config/env');

const app = express();

// Middlewares
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({
    origin: config.cors.allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Farm-ID'],
    credentials: true
}));

// Roteamento
app.use('/api', routes);

// Middleware para rotas não encontradas
app.use((req, res, next) => {
    console.log(`Rota não encontrada: ${req.method} ${req.originalUrl}`);
    res.status(404).json({ message: `Rota não encontrada: ${req.method} ${req.originalUrl}` });
});

// Middleware para tratamento de erros
app.use((err, req, res, next) => {
    console.error('Erro na aplicação:', err);
    res.status(500).json({ message: 'Erro interno do servidor', error: err.message });
});

module.exports = app;