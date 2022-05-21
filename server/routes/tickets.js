const express = require('express');
const router = express.Router();

const Boleto = require('../models/boleto');

//Algoritmo de cifrado
const abecedario = [" ","A", "B", "C", "D", "E", 
"F", "G", "H", "I", "J", 
"K", "L", "M", "N", "Ñ", 
"O", "P", "Q", "R", "S",
"T", "U", "V", "W", "X",
"Y", "Z", "a", "b", "c",
"d", "e", "f", "g", "h",
"i", "j", "k", "l", "m",
"n", "ñ", "o", "p", "q",
"r", "s", "t", "u", "v",
"w", "x", "y", "z"];

const n = abecedario.length;

function cifrar(mensaje, llave){
    //Variables
    let arrayMensaje= mensaje.split("");
    let arrayCifrado = new Array(arrayMensaje.length);
    let k = llave;
    let cifra = "";

    //Aplicando la formula matematica
    for (let i = 0; i < arrayMensaje.length; i++){

        for(let j = 0; j < abecedario.length; j++){
            if (arrayMensaje[i] != null && arrayMensaje[i] == abecedario[j]){
                arrayCifrado[i] = (j + k + 2) % n;//FORMULA DE CIFRADO 
                cifra += abecedario[arrayCifrado[i]];
            }
        }
    }
    return cifra; //Se devuelve el mensaje cifrado
}

function descifrar(mensajeCifrado, llave){
    let k = llave % n;
    let mensajeDescifrar = mensajeCifrado.split("");
    let arrayDescifrado = new Array(mensajeDescifrar.length); 
    let descifra = "";

    for(let i = 0; i < mensajeDescifrar.length; i++){
        for(let j = 0; j < abecedario.length; j++){
            if(mensajeDescifrar[i] != null && mensajeDescifrar[i] == abecedario[j]){
                if((j - k) < 0){//FORMULAS DE DESCIFRADO   
                    arrayDescifrado[i] = Math.round((n + (j - k - 2)));
                    descifra += abecedario[arrayDescifrado[i]];
                }else{
                    arrayDescifrado[i] = Math.round((j - k - 2));
                    descifra += abecedario[arrayDescifrado[i]];
                }
            }
        }
    }

    return descifra;
}

//Boleto CRUD
router.get('/boletos', (req, res) => {
    Boleto
    .find()
    .then(allBoletos => res.json(allBoletos));
});

router.get('/boleto/:boleto_id', (req, res) => {

    const {boleto_id} = req.params;

    Boleto
    .findById(boleto_id)
    .then(boleto => {
        let d = boleto.dueño;
        let llave = boleto.llave;
        let k = parseInt(llave);

        //Descifrar mensaje
        let m = descifrar(d, k);

        let boletoDescifrado = {
            _id: boleto_id,
            dueño: m,
            llave: k
        };

        console.log(boletoDescifrado);
        res.json(boletoDescifrado);
    });
});

router.post('/boleto/create', (req, res) => {

    let dueño = req.body.dueño;

    let k = parseInt(Math.round(Math.random() * (100 - 1) + 1));

    //Cifrar el mensaje
    let c = cifrar(dueño.toString(), k);

    let ticket = {
        dueño: c,
        llave: k
    }

    Boleto.create(ticket, (err, task) => {
        if(err){
            throw err;
        }else{
            res.send('Boleto creado con exito');
        }
    });
});

router.post('/boleto/descifrar', (req, res) => {
    let mensaje = req.body.dueño;

    Boleto.findOne({dueño: mensaje}, function(err, boleto){
        if(err){
            throw err;
        }else{
            let d = boleto.dueño;
            let llave = boleto.llave;
            let k = parseInt(llave);

            //Descifrar mensaje
            let m = descifrar(d, k);

            let boletoDescifrado = {
                _id: boleto._id,
                dueño: m,
                llave: k
            };

            console.log(boletoDescifrado);
            res.json(boletoDescifrado);
        }
    });
});

router.post('/boleto/cifrar', (req, res) => {
    let mensaje = req.body.dueño;

    let k = parseInt(Math.round(Math.random() * (100 - 1) + 1));

    //Cifrar el mensaje
    let c = cifrar(mensaje.toString(), k);

    let ticket = {
        dueño: c,
        llave: k
    }

    Boleto.create(ticket, (err, task) => {
        if(err){
            throw err;
        }else{
            res.send('Boleto creado con exito');
        }
    });
});

module.exports = router;