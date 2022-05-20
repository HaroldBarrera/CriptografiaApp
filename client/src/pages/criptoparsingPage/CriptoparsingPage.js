import React, { useState } from 'react';

const CriptoparsingPage = () => {

  const [archivo, setArchivo] = useState(null);//Hook del archivo

  function readFile(file) {
    const reader = new FileReader();
    reader.onload = function() {
      editor.value= reader.result; 
    }
    reader.readAsText(file);
  }

  function prueba(event){
    console.log(event.target.value);
    readFile(event.target.value);
  }

  return(
    <>
      <div className="container bg-info">
        <h1>SISTEMA DE CIFRADO-DESCIFRADO</h1>
      </div>
      <div className="container">
        <input type="file" id="file" onChange={(e) => setArchivo(e.target.files[0])} value={archivo} />
        <textarea id="contenidomensaje"></textarea>
      </div>
    </>
  );
}

export default CriptoparsingPage;
