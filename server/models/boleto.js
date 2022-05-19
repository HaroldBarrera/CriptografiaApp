const mongoose = require('mongoose');

const BoletoSchema = mongoose.Schema({
    dueño: String,
    llave: Number
});

const Boleto = mongoose.model('boleto', BoletoSchema);

module.exports = Boleto;