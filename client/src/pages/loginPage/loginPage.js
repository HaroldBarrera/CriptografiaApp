const loginPage = () => {

    const logUser = () => {
        fetch('http://localhost:5000/usuarios')
        .then(res => res.json())
        .then(allUsuarios => console.log(allUsuarios));
    };

    logUser();

    return(
        <main className="container">
            <h1 className="display-2 text-center bg-info text-white">INICIAR SESION</h1>
            <hr/>
            <form method="post" action="">
            <div className="form-group">
                <label for="logusername">Nombre de usuario</label>
                <input type="text" className="form-control" id="logusername" placeholder="Digite su nombre de usuario"/>
            </div>
            <div className="form-group">
                <label for="logpassword">Clave</label>
                <input type="password" className="form-control" id="logpassword" placeholder="Clave"/>
                <small id="passHelp" className="form-text text-muted">Recuerda no compartir esta clave con nadie.</small>
            </div>
            <button type="submit" className="btn btn-primary">Iniciar sesion</button>
            </form>
        </main>
    );
};

export default loginPage;