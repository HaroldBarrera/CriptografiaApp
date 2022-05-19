import React from "react";
import { Link } from "react-router-dom";

function MensajeIndividual({mensaje}){

    function descargarArchivo(filename, text){
        console.log("PRUEBA BOTON");
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);

        element.style.display = 'none';
        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    }

    return(
        <div className="container">
            <div className="row">
                <ul className="list-group">
                    <li className="list-group-item">ID: {mensaje._id}</li>
                    <li className="list-group-item">Mensaje: {mensaje.texto}</li>
                    <li className="list-group-item">De: {mensaje.emisor}</li>
                    <li className="list-group-item">Para: {mensaje.receptor}</li>
                </ul>

                <Link to={`/ver/${mensaje._id}`}>
                    <li className="btn btn-success">
                        Ver mensaje
                    </li>
                </Link>
                <button onClick={() => {descargarArchivo("MensajeCifrado.txt", mensaje.texto)}} className="btn btn-warning">Descargar mensaje cifrado</button>
                {/* <button onClick={retornarId} className="btn btn-success">Ver mensaje</button> */}
                <hr className="mt-4"></hr>

            </div>
        </div>
    );
};

export default MensajeIndividual;
