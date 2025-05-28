const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const routes = require('./routes');

const app = express();

const allowedOrigins = ['https://moovox.systems', 'https://www.moovox.systems'];

app.use(cors({
    origin: function (origin, callback) {
        if (!origin || allowedOrigins.includes(origin)) {
            callback(null, true);
        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

// Middleware para responder manualmente a OPTIONS (pré-vôo)
app.use((req, res, next) => {
    const origin = req.headers.origin;
    if (req.method === 'OPTIONS' && allowedOrigins.includes(origin)) {
        res.header('Access-Control-Allow-Origin', origin);
        res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,DELETE,OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
        res.header('Access-Control-Allow-Credentials', 'true');
        return res.sendStatus(204);
    }
    next();
});

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Middleware de log para depuração
app.use((req, res, next) => {
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    next();
});

app.use('/api', routes);

console.log('Express inicializado e aguardando requisições...');

module.exports = app;
