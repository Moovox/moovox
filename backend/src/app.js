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
    allowedHeaders:['Content-Type', 'Authorization'],
}));

app.use('/api', routes); 

module.exports = app;