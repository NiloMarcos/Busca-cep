import React from "react";
import './header.scss';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <section className="header-home">
        <section className="button-to-home">
          <Link to="/">Inicío: </Link>
        </section>
        <section className="buttons">
          <Link to="/buscacep">Buscar Cep</Link>
        </section>
      </section>
    </div>
  );
}
