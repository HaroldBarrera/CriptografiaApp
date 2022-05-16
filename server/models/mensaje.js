const mongoose = require('mongoose');

const MensajeSchema = mongoose.Schema({
    texto: String,
    emisor: String,
    receptor: String,
    llave: Number
});

const Mensaje = mongoose.model('mensaje', MensajeSchema);

module.exports = Mensaje;