import React from "react";

import { Link } from "react-router-dom";
import Header from "../../components/Header";
import "./home.scss";

export default function Home() {
  return (
    <main className="wrapper">
      <Header />
      <section className="welcome-to-app">
        <h1>Bem vindo ao BuscaCEP!</h1>
        <p>
          O aplicativo BuscaCEP, permite que você encontre os endereços no qual
          foi digitado, <br />
          caso tiver o endereço no banco de dados, retorna os dados do cep. Caso
          tiver o cep em mãos <br />
          basta procurar para obter os dados 😉.
        </p>
        <section className="button">
          <button>
            <Link to="/buscacep">BuscarCEP</Link> <br/>
          </button>
        </section>
      </section>

      <footer>
        <span>Copyright &copy; 2021, BuscaCEP - Todos os direitos reservados</span>
      </footer>
    </main>
  );
}
