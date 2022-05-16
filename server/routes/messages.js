const express = require('express');
const Mensaje = require('../models/mensaje');
const router = express.Router();

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

    console.log(body);
    
    Mensaje.create(body, (err, task) => {
        if(err){
            throw err;
        }else{
            res.send('Mensaje creado con exito');
        }
    })
});

module.exports = router;