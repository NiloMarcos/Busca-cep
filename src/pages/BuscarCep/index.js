import React, { useState, useRef } from "react";
import api from "../../services/api";
import { Link } from "react-router-dom";

import "./cep.scss";
import RenderItems from "../../components/RenderItems";
import Header from "../../components/Header";

export default function BuscaCep() {
  const [cepUser, setCepUser] = useState(null);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);

  async function myCep() {
    if (input === "") {
      alert("Digite um cep válido!");
      setInput("");
      return;
    }

    try {
      const response = await api.get(`/${input}/json`);
      console.log(response.data);
      setCepUser(response.data);
      // setInput('');
    } catch (error) {
      console.error(error);
    }
  }

  function newSearch() {
    setInput("");
    inputRef.current.focus();
  }

  return (
    <main className="wrapper">
      <Header />

      <div className="div-search">
        <section className="section-input">
          <input
            className="input-search"
            type="text"
            placeholder="Buscar CEP"
            value={input}
            maxlength="8"
            onChange={(event) => setInput(event.target.value)}
            ref={inputRef}
          />
        </section>
        <section className="section-buttons">
          <button onClick={() => myCep()} className="button-search">
            Buscar
          </button>
          <button onClick={() => newSearch()} className="button-new-search">
            Nova Busca
          </button>
        </section>

        
      </div>

      <RenderItems 
        cepUser={cepUser}
      />

      <footer>
        <span>
          Copyright &copy; 2021, BuscaCEP - Todos os direitos reservados
        </span>
      </footer>
    </main>
  );
}
