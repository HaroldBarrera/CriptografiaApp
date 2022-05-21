const express = require('express');
const router = express.Router();
const passport = require('passport');
const Usuario = require('../models/usuario');

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

router.post('/usuario/register', (req, res) => {

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

router.post('/usuario/login', passport.authenticate('local', {
    successRedirect:'/usuarios',
    failureRedirect:'/'
}));

module.exports = router;