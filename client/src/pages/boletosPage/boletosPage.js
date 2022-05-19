import { useState } from "react";
import axios from "axios";

const BoletosPage = () => {

    const [dueño, setDueño] = useState('');

    function generarBoleto(){
        var ticket = {
            dueño: dueño,
        }
        console.log(ticket);

        axios.post('/boleto/create', ticket).then(res => {
            alert(res.data);
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
        </>
    );
}

export default BoletosPage;