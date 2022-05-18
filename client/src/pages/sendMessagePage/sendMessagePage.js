import { useState } from "react";
import axios from "axios";

const SendMessagePage = () => {

        //Hooks
        const [emisor, setEmisor] = useState('');
        const [receptor, setReceptor] = useState('');
        const [texto, setTexto] = useState('');

        function enviarMensaje(){
            var mensaje = {
                emisor: emisor,
                receptor: receptor,
                texto: texto
            }
            console.log(mensaje);

            //fetch('http://localhost:5000/mensaje/create', mensaje).then(res => res.json());

            axios.post('/mensaje/create', mensaje).then(res => {
                alert(res.data);
            })
                .then(err => {console.log(err)});
        }

    return(
        <main className="container ">
            <div>
                <div class="form-group">
                    <label for="emisor">De:</label>
                    <input type="text" class="form-control" id="emisor" placeholder="Digite su correo" value={emisor} onChange={(e) => (setEmisor(e.target.value))}/>
                </div>
                <div class="form-group">
                    <label for="receptor">Enviar a:</label>
                    <input type="text" class="form-control" id="receptor" placeholder="Digite el correo de a quien va dirigido el mensaje" value={receptor} onChange={(e) => (setReceptor(e.target.value))}/>
                </div>
                <div class="form-group">
                    <label for="texto">Mensaje:</label>
                    <textarea type="text" class="form-control" id="texto" placeholder="Escriba su mensaje" value={texto} onChange={(e) => (setTexto(e.target.value))}></textarea>
                    {/* <input type="text" class="form-control" id="" placeholder="Digite su apellido"/> */}
                </div>
                <br />
                <button onClick={enviarMensaje} class="btn btn-primary">Enviar mensaje</button>
            </div>
        </main>
    );
};

export default SendMessagePage;
