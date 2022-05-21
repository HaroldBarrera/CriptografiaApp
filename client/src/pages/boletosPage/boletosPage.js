import { useState } from "react";
import axios from "axios";
import BoletocriptoparsingPage from "../criptoparsingPage/BoletocriptoparsingPage";

const BoletosPage = () => {

    const [dueño, setDueño] = useState('');

    function descargarArchivo(filename, text){
        var element = document.createElement('a');
        element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
        element.setAttribute('download', filename);
    
        element.style.display = 'none';
        document.body.appendChild(element);
    
        element.click();
    
        document.body.removeChild(element);
    }
    
    function generarBoleto(){
        var ticket = {
            dueño: dueño,
        }
        console.log(ticket);

        axios.post('/boleto/create', ticket).then(res => {
            alert(res.data.dueño);
            descargarArchivo("boleto.txt", res.data.dueño);
        })
            .then(err => {console.log(err)});
    }

    return(
        <>
            <div className="container bg-primary">
                <h1 className="text-light text-center">BOLETOS</h1>
                <hr className="mt-4"></hr>
                <div class="form-group">
                    <label for="dueño">De:</label>
                    <input type="text" class="form-control" id="dueño" placeholder="Digite su nombre" value={dueño} onChange={(e) => (setDueño(e.target.value))}/>
                </div>
                <br />
                <button onClick={generarBoleto} className="btn btn-danger">GENERAR BOLETO</button>
            </div>
            <hr className="mt-4"></hr>
            <div className="container">
                <BoletocriptoparsingPage />
            </div>
        </>
    );
}

export default BoletosPage;