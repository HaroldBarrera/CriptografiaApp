import axios from 'axios';
import React, { useState } from 'react';

const CriptoparsingPage = () => {

  const [archivo, setArchivo] = useState(null);//Hook del archivo
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

  function btnCifrar(){
    console.log("CIFRANDO: " + textarea);
    var mensaje = {
      texto: textarea
    };

    console.log(mensaje);

    axios.post('/mensaje/cifrar', mensaje).then(res => {
      alert(res.data.texto);
      var textoCifrado = res.data.texto;
      setResultado(textoCifrado);
    }).then(err => {console.log(err)});
  }

  function btnDescifrar(){
    console.log("DESCIFRANDO: " + textarea);
    
    var mensaje = {
      texto: textarea
    };

    console.log(mensaje);

    axios.post('/mensaje/descifrar', mensaje).then(res => {
      alert(res.data.texto);
      var textoDescifrado = res.data.texto;
      setResultado(textoDescifrado);
    }).then(err => {console.log(err)});
  }

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
    <>
    <div className='container bg-dark'>
      <div className="container bg-info">
        <h1>SISTEMA DE CIFRADO-DESCIFRADO</h1>
      </div>
      <div className="container">
        <input type="file" id="file" onChange={(e) => showFile(e)} value={archivo} className='text-light'/>
        <textarea id="contenidomensaje" value={textarea}></textarea>
      </div>
      <div className='container d-flex justify-content-center'>
        <button className='btn btn-success' onClick={() => btnCifrar()}>CIFRAR</button>
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

export default CriptoparsingPage;
