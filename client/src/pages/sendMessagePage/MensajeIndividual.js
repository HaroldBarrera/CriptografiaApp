import React from "react";
import { Link } from "react-router-dom";

function MensajeIndividual({mensaje}){
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
                {/* <button onClick={retornarId} className="btn btn-success">Ver mensaje</button> */}
                <hr className="mt-4"></hr>

            </div>
        </div>
    );
};

export default MensajeIndividual;