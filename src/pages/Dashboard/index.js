import React, { useState, useRef } from 'react';
import Header from '../../components/Header';
import api from '../../services/api';

import './dashboard.css'

export default function Dashboard(){
  const [cepUser, setCepUser] = useState(null);
  const [input, setInput] = useState('');
  const inputRef = useRef(null);

  async function myCep(){
    if(input === ''){
      alert('Digite um cep válido!');
      setInput('');
      return;
    }

    try {
      const response = await api.get(`/${input}/json`)
      console.log(response.data)
      setCepUser(response.data);
      // setInput('');
    }catch(error){
      console.error(error);
    }
  }

  function newSearch(){
    setInput('');
    inputRef.current.focus();
  }

  return(
    <>
      <Header title="Busca Cep"/>

      <div className="div-search">
        <input type="text" className="input" placeholder="Buscar" value={input} onChange={(event) => setInput(event.target.value)} ref={inputRef}/>
        <button onClick={() => myCep()} className="button-search">Buscar</button>
        <button onClick={() => newSearch()} className="button-new-search">Nova Busca</button>
      </div>

      { cepUser && 
        <div className="info-cep">
          <p className="info-cep-text">CEP: {cepUser.cep}</p>
          <p className="info-cep-text">Logradouro: {cepUser.logradouro}</p>
          <p className="info-cep-text">Bairro: {cepUser.bairro}</p>
          <p className="info-cep-text">Cidade: {cepUser.localidade}</p>
          <p className="info-cep-text">Estado: {cepUser.uf}</p>
        </div>
      }

    </>
  );
}