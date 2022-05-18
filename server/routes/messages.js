const express = require('express');
const Mensaje = require('../models/mensaje');
const router = express.Router();

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

//Diffie-Hellman
function operacionA(a, g, p){
    let ga = Math.pow(g,a);
    let A = ga % p;
    return A;
}

function Diffie_Hellman(a, b, g, p){
    let gb = Math.pow(g, b);
    let B = gb % p;
    //CAMBIO DE CLAVES
    let Ba = Math.pow(B, a);
    let k = Ba % p;
    console.log("LLAVE GENERADA: " + k);
    return k;
}

//Rutas del servidor
router.get('/mensajes', (req, res) => {
    Mensaje
    .find()
    .then(allMensajes => res.json(allMensajes));
});

router.post('/vermensaje', (req, res) => {

    let mensaje_id = req.body.id;

    Mensaje
    .findById(mensaje_id)
    .then(mensaje => {
        let d = mensaje.texto;
        let llave = mensaje.llave;
        let k = parseInt(llave);

        //Descifrar mensaje
        let m = descifrar(d, k);

        let mensajeDescifrado = {
            _id: mensaje_id,
            texto: m,
            emisor: mensaje.emisor,
            receptor: mensaje.receptor,
            llave: k
        };

        console.log(mensajeDescifrado);
        res.json(mensajeDescifrado);
    });
});

router.get('/mensaje/:mensaje_id', (req, res) => {

    const {mensaje_id} = req.params;

    Mensaje
    .findById(mensaje_id)
    .then(mensaje => {
        let d = mensaje.texto;
        let llave = mensaje.llave;
        let k = parseInt(llave);

        //Descifrar mensaje
        let m = descifrar(d, k);

        let mensajeDescifrado = {
            _id: mensaje_id,
            texto: m,
            emisor: mensaje.emisor,
            receptor: mensaje.receptor,
            llave: k
        };

        console.log(mensajeDescifrado);
        res.json(mensajeDescifrado);
    });
});

router.post('/mensaje/create', (req, res) => {

    let mensaje = req.body.texto;
    
    //Diffie hellman
    let prime_number = Math.round(Math.random() * (50 - 1) + 1);
    let generator = Math.round(Math.random() * (50 - 1) + 1);
    let valorA = Math.round(Math.random() * (50 - 1) + 1);
    let valorB= Math.round(Math.random() * (50 - 1) + 1);

    let k = parseInt(Diffie_Hellman(valorA, valorB, generator, prime_number));

    //Cifrar el mensaje
    let c = cifrar(mensaje.toString(), k);

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