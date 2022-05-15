const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const session = require('express-session');

//Conexion a base de datos
require('./database');

//Settings
app.set('port', process.env.PORT || 5000);

//Middleware
app.use(express.urlencoded({extended: false}));
app.use(bodyParser.urlencoded({extended: false}));
app.use(methodOverride('_method'));
app.use(session({
    secret: 'mysecretapp',
    resave: true,
    saveUninitialized: true
}));

//CORS
const cors = require('cors');
app.use(cors());

//Enrutamiento
app.use(require('./routes/index'));
app.use(require('./routes/users'));
app.use(require('./routes/messages'));

//servidor
app.listen(app.get('port'), () => {
    console.log("SERVIDOR ABIERTO EN PUERTO ", app.get('port'));
});