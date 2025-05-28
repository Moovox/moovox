const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const routes = require('./routes') 

const app = express(); 

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use(cors({
    origin: ['https://www.moovox.systems', 'https://moovox.systems', 'http://localhost:5173'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders:['Content-Type', 'Authorization'],
}));

app.use('/api', routes); 

module.exports = app;

