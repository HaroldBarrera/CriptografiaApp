const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/criptografiaApp')
.then(db => console.log("CONEXION A BASE DE DATOS EXITOSA"))
.catch(err => console.log(err));