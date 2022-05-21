import axios from 'axios';
import React, { useState } from 'react';

const BoletocriptoparsingPage = () => {

  const [archivo] = useState(null);//Hook del archivo
  const [textarea, setTextarea] = useState('');
  const [resultado, setResultado] = useState('');

  const showFile = async (e) => {
    e.preventDefault()
    const reader = new FileReader()
    reader.onload = async (e) => { 
      const text = (e.target.result)
      setTextarea(text);
      console.log(text)
      //alert(text)
    };
    reader.readAsText(e.target.files[0])
  }

  function btnDescifrar(){
    console.log("DESCIFRANDO: " + textarea);
    
    var mensaje = {
      dueño: textarea
    };

    console.log(mensaje);

    axios.post('/boleto/descifrar', mensaje).then(res => {
      alert(res.data.dueño);
      var textoDescifrado = res.data.dueño;
      setResultado(textoDescifrado);
    }).then(err => {console.log(err)});
  }

  function descargarArchivo(filename, text){
    var element = document.createElement('a');
    element.setAttribute('href', 'data:text/plain;charset=utf-8,' + encodeURIComponent(text));
    element.setAttribute('download', filename);

    element.style.display = 'none';
    document.body.appendChild(element);

    element.click();

    document.body.removeChild(element);
  }

  return(
    <>
    <div className='container bg-dark'>
      <div className="container bg-info">
        <h1>DESCIFRA TU BOLETO AQUI</h1>
      </div>
      <div className="container">
        <input type="file" id="file" onChange={(e) => showFile(e)} value={archivo} className='text-light'/>
        <textarea id="contenidomensaje" value={textarea}></textarea>
      </div>
      <div className='container d-flex justify-content-center'>
        <button className='btn btn-warning' onClick={() => btnDescifrar()}>DESCIFRAR</button>
      </div>
      <div className='container d-flex justify-content-center'>
        <textarea value={resultado}></textarea>
      </div>
      <div className='container d-flex justify-content-center'>
        <button className='btn btn-danger' onClick={() => {descargarArchivo("CriptoParser.txt", resultado)}}>Descargar archivo</button>
      </div>
    </div>
    </>
  );
}

export default BoletocriptoparsingPage;
