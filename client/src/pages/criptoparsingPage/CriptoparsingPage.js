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
      <div className="container bg-info">
        <h1>SISTEMA DE CIFRADO-DESCIFRADO</h1>
      </div>
      <div className="container">
        <input type="file" id="file" onChange={(e) => showFile(e)} value={archivo} />
        <textarea id="contenidomensaje" value={textarea}></textarea>
      </div>
    </>
  );
}

export default CriptoparsingPage;
