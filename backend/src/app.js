const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const routes = require('./routes') 

const app = express(); 

// Configuração do CORS baseada no ambiente
const allowedOrigins = process.env.NODE_ENV === 'development' 
    ? ['http://localhost:5173', 'http://localhost:3000', 'http://localhost:3001']
    : ['https://www.moovox.systems', 'https://moovox.systems'];

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use(cors({
    origin: allowedOrigins,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-Farm-ID'],
}));

// Middleware para adicionar headers de CORS em todas as respostas
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (allowedOrigins.includes(origin)) {
        res.setHeader('Access-Control-Allow-Origin', origin);
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, X-Farm-ID');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
});

app.use('/api', routes); 

module.exports = app;