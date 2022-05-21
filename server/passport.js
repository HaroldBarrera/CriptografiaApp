const passport = require('passport');
const LocalStrategy = require('passport-local');

const Usuario = require('./models/usuario');

passport.use(new LocalStrategy({
    usernameField: 'username'
}, async (username, password, done) => {
    const user = await Usuario.findOne({username: username});
    if(!user){
        return done(null, false, {message: 'Usuario no encontrado'});
    }else if(user.password == password){
        return done(null, user);
    }else{
        return done(null, false, {message: 'Contraseña incorrecta'});
    }
}));

passport.serializeUser((user, done) => {
    done(null, user.id);
});

passport.deserializeUser((id, done) => {
    Usuario.findById(id, (err, user) => {
        done(err, user);
    });
});