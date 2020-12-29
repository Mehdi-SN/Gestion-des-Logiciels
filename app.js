const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const logicielRouters = require('./routes/logiciel');
const path = require('path');
const userRoute = require('./routes/user');

const app = express();

mongoose.connect('mongodb+srv://user_mehdi:myExamProject25-12@cluster0.hnumf.mongodb.net/<dbname>?retryWrites=true&w=majority',
    { useNewUrlParser: true,
        useUnifiedTopology: true })
    .then(() => console.log('Connexion à MongoDB réussie !'))
    .catch(() => console.log('Connexion à MongoDB échouée !'));


app.use((req, res, next) => {
        res.setHeader('Access-Control-Allow-Origin', '*');
        res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
        next();
});


app.use(bodyParser.json());

app.use('/api/logiciels', logicielRouters);
app.use('/api/auth', userRoute);



module.exports = app;


