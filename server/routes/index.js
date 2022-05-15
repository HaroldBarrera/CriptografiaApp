const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario');

router.get('/', (req, res) => {
    res.send('Hello World');
});

//Usuario CRUD
router.get('/api/usuarios', (req, res) => {
    Usuario
    .find()
    .then(allUsuarios => res.json(allUsuarios));
});


router.get('/api/usuario/:usuario_id', (req, res) => {

    const {usuario_id} = req.params;

    Usuario
    .findById(usuario_id)
    .then(usuario => res.json(usuario));
});

router.post('/api/usuario/create', (req, res) => {

    let body = req.body;

    console.log(body);
    
    Usuario.create(body, (err, task) => {
        if(err){
            throw err;
        }else{
            res.send('Usuario creado con exito');
        }
    })
});

module.exports = router;