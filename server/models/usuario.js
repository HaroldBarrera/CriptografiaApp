const mongoose = require('mongoose');

const UsuarioSchema = mongoose.Schema({
    nombre: String,
    username: String,
    password: String
});

const Usuario = mongoose.model('usuario', UsuarioSchema);

module.exports = Usuario;