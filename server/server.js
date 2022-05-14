const express = require('express');
const app = express();

//Conexion a base de datos
const mongoose = require('mongoose');
mongoose
.connect('mongodb://localhost/criptografiaApp')
.then(() => console.log('CONECTADO A BASE DE DATOS'));

//Modelo
const Usuario = require('./models/usuario');

//Enrutamiento
app.get('/api/usuarios', (req, res) => {
    Usuario
    .find()
    .then(allUsuarios => res.json(allUsuarios));
});

app.get('/api/usuario/:usuario_id', (req, res) => {

    const {usuario_id} = req.params;

    Usuario
    .findById(usuario_id)
    .then(usuario => res.json(usuario));
});

app.listen(5000, () => console.log('SERVIDOR ABIERTO'));