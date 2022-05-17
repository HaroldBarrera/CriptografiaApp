const express = require('express');
const Mensaje = require('../models/mensaje');
const router = express.Router();

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

router.get('/mensajes', (req, res) => {
    Mensaje
    .find()
    .then(allMensajes => res.json(allMensajes));
});


router.get('/mensaje/:mensaje_id', (req, res) => {

    const {mensaje_id} = req.params;

    Mensaje
    .findById(mensaje_id)
    .then(mensaje => res.json(mensaje));
});

router.post('/mensaje/create', (req, res) => {

    let body = req.body;
    let mensaje = req.body.texto;
    let llave = req.body.llave;
    let k = parseInt(llave);
    let c = cifrar(mensaje.toString(), k);
    let d = descifrar(c.toString(), k);

    let men = {
        texto: c,
        emisor: req.body.emisor,
        receptor: req.body.receptor,
        llave: k
    }

    Mensaje.create(men, (err, task) => {
        if(err){
            throw err;
        }else{
            res.send('Mensaje creado con exito');
        }
    });
});

module.exports = router;