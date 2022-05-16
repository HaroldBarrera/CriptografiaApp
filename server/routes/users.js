const express = require('express');
const router = express.Router();

const Usuario = require('../models/usuario');


router.get('/usuario/login', (req, res) => {
    res.send('Login...');
});

router.get('/usuario/register', (req, res) => {
    res.send('Register...');
});

//Usuario CRUD
router.get('/usuarios', (req, res) => {
    Usuario
    .find()
    .then(allUsuarios => res.json(allUsuarios));
});


router.get('/usuario/:usuario_id', (req, res) => {

    const {usuario_id} = req.params;

    Usuario
    .findById(usuario_id)
    .then(usuario => res.json(usuario));
});

router.post('/usuario/create', async (req, res) => {

    /*console.log(req.body);
    res.json(req.body);*/

    /*const user = Usuario(req.body);

    const userSaved = await user.save();

    console.log(userSaved);

    res.send('saved');*/

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