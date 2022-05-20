import React, { useState } from 'react';

const CriptoparsingPage = () => {

  const [archivo, setArchivo] = useState(null);//Hook del archivo
  const [textarea, setTextarea] = useState('');

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
        <button className='btn btn-success'>CIFRAR</button>
        <button className='btn btn-warning'>DESCIFRAR</button>
      </div>
      <div className='container d-flex justify-content-center'>
        <textarea></textarea>
        <textarea></textarea>
      </div>
    </div>
    </>
  );
}

export default CriptoparsingPage;
