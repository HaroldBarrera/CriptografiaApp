import axios from "axios";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const LoginPage = () => {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const logUser = () => {
        console.log("USERNAME: " +username);
        console.log("PASSWORD: " +password);

        var usuario = {
            username: username,
            password: password
        };

        axios.post('/usuario/login', usuario).then(res => {
            console.log('PROCESO LOGEO EXITOSO');
            navigate('/sendmessage', {replace: true});
        }).then(err => {console.log(err)});
    };

    return(
        <main className="container">
            <h1 className="display-2 text-center bg-info text-white">INICIAR SESION</h1>
            <hr/>
            <div>
                <div className="form-group">
                    <label for="logusername">Nombre de usuario</label>
                    <input type="text" value={username} onChange={(e) => (setUsername(e.target.value))} className="form-control" id="logusername" placeholder="Digite su nombre de usuario"/>
                </div>
                <div className="form-group">
                    <label for="logpassword">Clave</label>
                    <input type="password" value={password} onChange={(e) => (setPassword(e.target.value))} className="form-control" id="logpassword" placeholder="Clave"/>
                    <small id="passHelp" className="form-text text-muted">Recuerda no compartir esta clave con nadie.</small>
                </div>
                <div className="d-flex justify-content-center">
                    <button onClick={() => {logUser()}} className="btn btn-primary">Iniciar sesion</button>
                </div>
                <div className="d-flex justify-content-center">
                    <h6>¿No tienes una cuenta?</h6><Link to='/register'>REGISTRATE AQUI</Link>
                </div>
            </div>
        </main>
    );
};

export default LoginPage;