import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const VerMensajePage = () => {

    const params = useParams();

    //Hooks
    // const [emisor, setEmisor] = useState('');
    // const [receptor, setReceptor] = useState('');
    const [texto, setTexto] = useState('');
    // const [datamensajes, setdatamensajes] = useState([]);

    useEffect(() => {
        axios.post('/vermensaje', {id: params.id})
        .then(res => {
            console.log(res.data);
            const datamensaje = res.data;
            setTexto(datamensaje.texto);
        })
    });

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
        <main className="container">
            <h1>VER MENSAJE</h1>
            <h3>El id del mensaje es: {params.id}</h3>
            <br/>
            <textarea value={texto} readOnly className="form-control"></textarea>
            <br/>
            <Link to="/sendmessage">
                <button className="btn btn-warning">Volver</button>
            </Link>
            <button onClick={() => {descargarArchivo("MensajeDescifrado.txt", texto)}} className="btn btn-primary">Descargar</button>
        </main>
    );
};

export default VerMensajePage;
