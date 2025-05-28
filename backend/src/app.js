const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const routes = require('./routes')

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Middleware de log para depuração
app.use((req, res, next) => {
    res.on('finish', () => {
        console.log(`[${req.method}] ${req.originalUrl} - Status: ${res.statusCode}`);
    });
    next();
});

app.use(cors({
    origin: 'https://moovox.systems',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));
app.options('*', cors({
    origin: 'https://moovox.systems',
    credentials: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization']
}));

app.use('/api', routes);

module.exports = app;