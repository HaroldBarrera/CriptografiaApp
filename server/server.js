const express = require('express');
const app = express();
const indexRoutes = require('./routes/index')
const bodyParser = require('body-parser');

//Settings
app.set('port', process.env.PORT || 5000);

//Middleware
app.use(bodyParser.urlencoded({extended: false}));

//Conexion a base de datos
const mongoose = require('mongoose');
mongoose
.connect('mongodb://localhost/criptografiaApp')
.then(() => console.log('CONECTADO A BASE DE DATOS'));

//Modelo
const Usuario = require('./models/usuario');

//CORS
const cors = require('cors');
app.use(cors());

//Enrutamiento
app.use('/', indexRoutes);

//servidor
app.listen(app.get('port'), () => {
    console.log("SERVIDOR ABIERTO EN PUERTO ", app.get('port'));
});