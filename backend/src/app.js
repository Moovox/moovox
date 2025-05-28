const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const routes = require('./routes') 

const app = express(); 

app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use(cors({origin: 'https://moovox.systems', credentials: true}));
app.options('*', cors({origin: 'https://moovox.systems', credentials: true}));

app.use('/api', routes); 

module.exports = app;

