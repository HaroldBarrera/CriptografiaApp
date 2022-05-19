import { Link } from 'react-router-dom';

const indexPage = () => {
    return(
        <main className='container bg-dark'>
            <div>
                <h1 className='display-1 text-light text-center'>PROYECTOS</h1>
            </div>

            <div className='container bg-light'>
                <p>
                    Esta es una aplicacion creada para las asignatura de criptografia
                    y sistemas de gesion de la seguridad para servir como proyecto final.
                    En el caso de criptografia, consiste en el envio de mensajes seguros
                    entre usuarios. Los usuarios requeriran registrarse con una cuenta
                    para despues iniciar sesion en la aplicacion y poder enviar mensajes
                    a otros usuarios mediante el correo electronico. El mensaje se enviara
                    al otro usuario y desde la perspectiva del usuario no pasa nada raro
                    pero dentro de la base de datos el mensaje fue encriptado y guardado
                    mientras que el usuario usando una funcion de desencriptacion de 
                    manera inconsciente puede ver el mensaje en su cuenta.

                    Para el proyecto de SGSI:
                    Esta pagina tambien cumplira con el fin de satisfacer los
                    objetivos de la asignatura de sistemas de gestion de la seguridad
                    de la informacion. Se utilizara el mismo sistema de cifrado ademas
                    de incluir una base de datos remota en el sistema operativo
                    linux con un firewall activo y una base de datos con contraseña.
                </p>
            </div>
            <div align="center">
                <Link to="/boletos">
                    <button class="btn btn-primary">
                        SGSI
                    </button>
                </Link>
            </div>
            <br />
            <div align="center">
                <Link to="/sendmessage">
                    <button class="btn btn-success" margin="10px">
                        CRIPTOGRAFIA
                    </button>
                </Link>
            </div>
            <br />
        </main>
    );
};

export default indexPage;
