import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
const RegisterPage = () => {

    const [nombre, setNombre] = useState('');
    const [apellido, setApellido] = useState('');
    const [correo, setCorreo] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    function regUser(){
        var nuevousuario = {
            nombre: nombre,
            apellido: apellido,
            correo: correo,
            username: username,
            password: password
        };
        
        console.log(nuevousuario);

        axios.post('/usuario/register', nuevousuario).then(res => {
            alert(res.data);
        }).then(err => {console.log((err))});
    }

    return(
        <main className="container">
            <h1 className="display-2 text-center bg-success text-white">REGISTRARSE</h1>
            <hr/>
            <div>
                <div class="form-group">
                    <label for="nombre">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => (setNombre(e.target.value))} class="form-control" id="nombre" placeholder="Digite su nombre"/>
                </div>
                <div class="form-group">
                    <label for="apellido">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => (setApellido(e.target.value))} class="form-control" id="apellido" placeholder="Digite su apellido"/>
                </div>
                <div class="form-group">
                    <label for="correo">Correo electronico</label>
                    <input type="email" value={correo} onChange={(e) => (setCorreo(e.target.value))} class="form-control" id="correo" placeholder="Digite su correo electronico"/>
                    <small id="emailHelp" class="form-text text-muted">Su correo se la forma en como enviaras y recibiras mensajes.</small>
                </div>
                <div class="form-group">
                    <label for="username">Nombre de usuario</label>
                    <input type="text" value={username} onChange={(e) => (setUsername(e.target.value))} class="form-control" id="username" placeholder="Digite un nombre de usuario"/>
                    <small id="userHelp" class="form-text text-muted">Por este nombre es que por le que sera reconocido dentro de la aplicacion.</small>
                </div>
                <div class="form-group">
                    <label for="password">Clave</label>
                    <input type="password" value={password} onChange={(e) => (setPassword(e.target.value))} class="form-control" id="password" placeholder="Clave"/>
                    <small id="passHelp" class="form-text text-muted">Recuerda no compartir esta clave con nadie.</small>
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={() => regUser()} type="submit" class="btn btn-primary">Registrarme</button>
                </div>
                <div className="d-flex justify-content-center">
                    <h6>¿Ya tienes una cuenta?</h6><Link to='/login'>INICIA SESION</Link>
                </div>
            </div>
        </main>
    );
};

export default RegisterPage;