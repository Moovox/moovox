const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const routes = require('./routes')

const app = express();

// CORS deve ser o primeiro middleware
app.use(cors({
    origin: 'https://moovox.systems',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para responder manualmente a OPTIONS
app.use((req, res, next) => {
    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Origin', 'https://moovox.systems');
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Access-Control-Allow-Credentials', 'true');
        return res.sendStatus(204);
    }
    next();
});

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware de log para depuração
app.use((req, res, next) => {
    res.on('finish', () => {
        console.log(`[${req.method}] ${req.originalUrl} - Status: ${res.statusCode}`);
    });
    next();
});

app.use('/api', routes);

module.exports = app;