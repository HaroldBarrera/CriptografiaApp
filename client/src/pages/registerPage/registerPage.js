const registerPage = () => {
    return(
        <main className="container">
            <h1 className="display-2 text-center bg-success text-white">REGISTRARSE</h1>
            <hr/>
            <form method="post" action="">
            <div class="form-group">
                <label for="nombre">Nombre</label>
                <input type="text" class="form-control" id="nombre" placeholder="Digite su nombre"/>
            </div>
            <div class="form-group">
                <label for="apellido">Apellido</label>
                <input type="text" class="form-control" id="apellido" placeholder="Digite su apellido"/>
            </div>
            <div class="form-group">
                <label for="correo">Correo electronico</label>
                <input type="email" class="form-control" id="correo" placeholder="Digite su correo electronico"/>
                <small id="emailHelp" class="form-text text-muted">Su correo se la forma en como enviaras y recibiras mensajes.</small>
            </div>
            <div class="form-group">
                <label for="username">Nombre de usuario</label>
                <input type="text" class="form-control" id="username" placeholder="Digite un nombre de usuario"/>
                <small id="userHelp" class="form-text text-muted">Por este nombre es que por le que sera reconocido dentro de la aplicacion.</small>
            </div>
            <div class="form-group">
                <label for="password">Clave</label>
                <input type="password" class="form-control" id="password" placeholder="Clave"/>
                <small id="passHelp" class="form-text text-muted">Recuerda no compartir esta clave con nadie.</small>
            </div>
            <button type="submit" class="btn btn-primary">Registrarme</button>
            </form>
        </main>
    );
};

export default registerPage;