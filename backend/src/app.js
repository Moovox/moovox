const express = require('express');
const path = require('path');
require('dotenv').config();
const cors = require('cors');
const routes = require('./routes') 

const app = express(); 



app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 
app.use(cors({
    origin: ['https://www.moovox.systems', 'http://localhost:3000'], 
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders:['Content-Type', 'Authorization'],
}));

app.use((err, req, res, next) => {
    if (err instanceof SyntaxError && err.status === 400 && 'body' in err) {
        return res.status(400).json({
            status: 'error',
            message: 'O corpo da requisição está em formato JSON inválido.'
        });
    }

    next(err); // Passa para outros middlewares se não for erro de JSON
});

app.use('/api', routes); 

module.exports = app;

